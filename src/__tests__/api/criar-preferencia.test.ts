/** @jest-environment node */

import { POST } from '@/app/api/criar-preferencia/route'
import type { NextRequest } from 'next/server'

// ---------- mock Mercado Pago ----------
const mockCreate = jest.fn()

jest.mock('mercadopago', () => ({
  MercadoPagoConfig: jest.fn().mockImplementation(() => ({})),
  Preference: jest.fn().mockImplementation(() => ({
    create: mockCreate,
  })),
}))

// Build a plain object that satisfies what the route handler reads
function makeRequest(body: object, origin: string): NextRequest {
  return {
    json: async () => body,
    headers: { get: (key: string) => (key === 'origin' ? origin : null) },
    nextUrl: { origin: 'http://localhost:3000' },
  } as unknown as NextRequest
}

describe('POST /api/criar-preferencia', () => {
  beforeEach(() => {
    process.env.MP_ACC_KEY = 'TEST_TOKEN'
    mockCreate.mockReset()
  })

  it('returns the init_point URL from Mercado Pago', async () => {
    mockCreate.mockResolvedValue({ init_point: 'https://mp.com/checkout/abc' })

    const req = makeRequest({ valor: 30 }, 'https://criereproject.com.br')
    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.url).toBe('https://mp.com/checkout/abc')
  })

  it('sends correct item title and unit price', async () => {
    mockCreate.mockResolvedValue({ init_point: 'https://mp.com/checkout/xyz' })

    await POST(makeRequest({ valor: 50 }, 'https://criereproject.com.br'))

    const { body } = mockCreate.mock.calls[0][0]
    expect(body.items[0]).toMatchObject({
      title: 'Doação — Projeto Crierê',
      unit_price: 50,
      currency_id: 'BRL',
    })
  })

  it('includes auto_return for production origins', async () => {
    mockCreate.mockResolvedValue({ init_point: 'https://mp.com/checkout/prod' })

    await POST(makeRequest({ valor: 100 }, 'https://criereproject.com.br'))

    const { body } = mockCreate.mock.calls[0][0]
    expect(body.auto_return).toBe('approved')
  })

  it('omits auto_return for localhost origins', async () => {
    mockCreate.mockResolvedValue({ init_point: 'https://mp.com/checkout/dev' })

    await POST(makeRequest({ valor: 30 }, 'http://localhost:3000'))

    const { body } = mockCreate.mock.calls[0][0]
    expect(body.auto_return).toBeUndefined()
  })

  it('sets back_urls using the request origin', async () => {
    mockCreate.mockResolvedValue({ init_point: 'https://mp.com/checkout/urls' })

    const origin = 'https://criereproject.com.br'
    await POST(makeRequest({ valor: 30 }, origin))

    const { body } = mockCreate.mock.calls[0][0]
    expect(body.back_urls.success).toBe(`${origin}/doacao?status=sucesso`)
    expect(body.back_urls.failure).toBe(`${origin}/doacao?status=erro`)
    expect(body.back_urls.pending).toBe(`${origin}/doacao?status=pendente`)
  })
})

describe('POST /api/criar-preferencia — validação de entrada', () => {
  beforeEach(() => {
    process.env.MP_ACC_KEY = 'TEST_TOKEN'
    mockCreate.mockReset()
    mockCreate.mockResolvedValue({ init_point: 'https://mp.com/checkout/x' })
  })

  it.each([
    ['zero', 0],
    ['negativo', -50],
    ['acima do teto', 1_000_001],
    ['não numérico', 'abc'],
    ['indefinido', undefined],
  ])('rejeita valor %s com status 400', async (_label, valor) => {
    const res = await POST(makeRequest({ valor }, 'https://criereproject.com.br'))
    expect(res.status).toBe(400)
    // não deve chamar o Mercado Pago quando a entrada é inválida
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('aceita valor válido no limite mínimo (1)', async () => {
    const res = await POST(makeRequest({ valor: 1 }, 'https://criereproject.com.br'))
    expect(res.status).toBe(200)
    expect(mockCreate).toHaveBeenCalled()
  })
})

describe('POST /api/criar-preferencia — falha do Mercado Pago', () => {
  beforeEach(() => {
    process.env.MP_ACC_KEY = 'TEST_TOKEN'
    mockCreate.mockReset()
  })

  it('retorna 500 quando o SDK do MP lança erro', async () => {
    // silencia o console.error do handler durante o teste
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    mockCreate.mockRejectedValue(new Error('MP indisponível'))

    const res = await POST(makeRequest({ valor: 30 }, 'https://criereproject.com.br'))
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.error).toBeDefined()
    errSpy.mockRestore()
  })
})

import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACC_KEY!,
})

// Teto de segurança para evitar valores absurdos/abuso (R$ 1.000.000)
const VALOR_MAX = 1_000_000

export async function POST(req: NextRequest) {
  try {
    const { valor } = await req.json()
    const valorNum = Number(valor)

    if (!Number.isFinite(valorNum) || valorNum <= 0 || valorNum > VALOR_MAX) {
      return NextResponse.json({ error: 'Valor inválido' }, { status: 400 })
    }

    const origin = req.headers.get('origin') ?? req.nextUrl.origin
    const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1')

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items: [
          {
            id: 'doacao-criere',
            title: 'Doação — Projeto Crierê',
            quantity: 1,
            unit_price: valorNum,
            currency_id: 'BRL',
          },
        ],
        back_urls: {
          success: `${origin}/doacao?status=sucesso`,
          failure: `${origin}/doacao?status=erro`,
          pending: `${origin}/doacao?status=pendente`,
        },
        ...(!isLocalhost && { auto_return: 'approved' }),
      },
    })

    return NextResponse.json({ url: result.init_point })
  } catch (err) {
    console.error('Erro ao criar preferência MP:', err)
    return NextResponse.json(
      { error: 'Não foi possível iniciar o pagamento' },
      { status: 500 }
    )
  }
}

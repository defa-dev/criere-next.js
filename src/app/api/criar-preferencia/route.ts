import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACC_KEY!,
})

export async function POST(req: NextRequest) {
  const { valor } = await req.json()

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
          unit_price: Number(valor),
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
}

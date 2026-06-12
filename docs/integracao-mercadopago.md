# Integração Mercado Pago — Crierê

## Visão geral

O fluxo de doação pontual usa o **Checkout Pro** do Mercado Pago no modo redirect:

```
Doador escolhe valor
  → site cria preferência (API route)
  → doador vai para o checkout do MP
  → doador paga
  → MP redireciona de volta para o site
```

---

## Arquivos envolvidos

| Arquivo | Responsabilidade |
|---|---|
| `src/app/api/criar-preferencia/route.ts` | Cria a preferência de pagamento via SDK |
| `src/app/doacao/page.tsx` | Página de doação — chama a API e redireciona |

---

## Variáveis de ambiente

| Variável | Onde usar | Descrição |
|---|---|---|
| `MP_ACC_KEY` | Servidor (API route) | Access Token — nunca expor no frontend |
| `MP_PUB_KEY` | Servidor | Public Key (reservado para uso futuro) |
| `NEXT_PUBLIC_MP_PUB_KEY` | Cliente | Public Key acessível no browser |

Em produção, `MP_ACC_KEY` e `NEXT_PUBLIC_MP_PUB_KEY` precisam estar nas **Environment Variables do Vercel**.

As credenciais de **teste** e de **produção** são diferentes — obtidas em mercadopago.com.br/developers.

---

## Fluxo detalhado

### 1. Doador clica num valor

`src/app/doacao/page.tsx` chama:

```ts
const res = await fetch('/api/criar-preferencia', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ valor: 50 }),
})
const { url } = await res.json()
window.location.href = url
```

### 2. API cria a preferência

`src/app/api/criar-preferencia/route.ts` usa o SDK do MP:

```ts
const preference = new Preference(client)
const result = await preference.create({
  body: {
    items: [{ title: 'Doação — Projeto Crierê', unit_price: 50, quantity: 1, currency_id: 'BRL' }],
    back_urls: {
      success: 'https://seusite.com/doacao?status=sucesso',
      failure: 'https://seusite.com/doacao?status=erro',
      pending: 'https://seusite.com/doacao?status=pendente',
    },
    auto_return: 'approved',
  },
})
// retorna result.init_point (URL do checkout)
```

### 3. Doador paga no MP

O MP exibe o checkout em `mercadopago.com.br/checkout/...`. Aceita PIX, cartão de crédito/débito e boleto automaticamente.

### 4. MP redireciona de volta

Após o pagamento, o MP redireciona para uma das `back_urls`:

| Status | URL de retorno |
|---|---|
| Aprovado | `/doacao?status=sucesso` |
| Pendente (boleto/PIX) | `/doacao?status=pendente` |
| Rejeitado | `/doacao?status=erro` |

A página lê o parâmetro `status` e exibe um banner de feedback ao doador.

---

## Como testar em sandbox

### Credenciais de teste
Use as credenciais de teste (não as de produção). As credenciais de teste têm o mesmo formato mas são vinculadas a um ambiente sandbox.

### Usuário de teste
O MP cria usuários de teste para simular um comprador. No painel de developers, você pode criar um "usuário de teste comprador" e usar os dados dele para completar o checkout.

### Cartões de teste

| Cartão | Número | CVV | Vencimento |
|---|---|---|---|
| Visa (aprovado) | 4509 9535 6623 3704 | 123 | 11/30 |
| Mastercard (aprovado) | 5031 7557 3453 0604 | 123 | 11/30 |
| Qualquer (recusado) | 4000 0000 0000 0002 | 123 | 11/30 |

PIX no sandbox: o QR Code gerado é fictício — basta clicar em "Simular pagamento" na tela do MP.

---

## Ir para produção

1. Trocar `MP_ACC_KEY` pelo Access Token de **produção** (no Vercel)
2. Trocar `NEXT_PUBLIC_MP_PUB_KEY` pela Public Key de produção
3. As `back_urls` já usam a `origin` da requisição — funcionam automaticamente

---

## Próximos passos (quando necessário)

**Webhook** — notificação server-to-server quando um pagamento é confirmado. Útil para salvar registros, enviar e-mails ou integrar com planilhas. Requer criar um endpoint `POST /api/webhook-mp` e registrar a URL no painel do MP em Configurações → Notificações IPN.

**Doação mensal** — o MP tem uma API de Assinaturas para débito recorrente. Atualmente o fluxo mensal usa WhatsApp como intermediário.

import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DoeAgora from '@/app/doacao/page'

// ---------- mocks ----------
// reconfigurável por teste (prefixo "mock" exigido pelo hoisting do jest)
let mockSearchParams = new URLSearchParams()

jest.mock('next/navigation', () => ({
  usePathname: () => '/doacao',
  useSearchParams: () => mockSearchParams,
}))

jest.mock('next/link', () =>
  function MockLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>
  }
)

jest.mock('@/components/Header', () => function MockHeader() { return <nav data-testid="header" /> })
jest.mock('@/components/FooterNew', () => function MockFooter() { return <footer data-testid="footer" /> })

// O componente delega o redirect a @/lib/navigate. Mockamos o módulo para
// (1) evitar a navegação real e (2) asserir PARA ONDE o usuário foi enviado.
jest.mock('@/lib/navigate', () => ({ redirect: jest.fn() }))
import { redirect } from '@/lib/navigate'
const redirectMock = redirect as jest.Mock

// Clipboard API
Object.assign(navigator, {
  clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
})

beforeEach(() => {
  mockSearchParams = new URLSearchParams()
  redirectMock.mockClear()
  ;(navigator.clipboard.writeText as jest.Mock).mockClear()
})

// ---------- helpers ----------
function renderPage() {
  return render(<DoeAgora />)
}

// ---------- tests ----------
describe('Donation page — campaign banner', () => {
  it('shows the campaign banner by default', () => {
    renderPage()
    expect(screen.getByText(/Campanha de Festa Junina/i)).toBeInTheDocument()
  })

  it('hides the banner when the close button is clicked', async () => {
    renderPage()
    await userEvent.click(screen.getByRole('button', { name: /Fechar aviso/i }))
    expect(screen.queryByText(/Campanha de Festa Junina/i)).not.toBeInTheDocument()
  })
})

describe('Donation page — tipo toggle', () => {
  it('shows "Pontual" as active by default', () => {
    renderPage()
    expect(screen.getByRole('button', { name: 'Pontual' })).toHaveStyle({ fontWeight: '600' })
  })

  it('clicking "Mensal" does NOT switch the active tab (permanece bloqueado)', async () => {
    renderPage()
    await userEvent.click(screen.getByRole('button', { name: 'Mensal' }))
    // O texto exclusivo do fluxo mensal (WhatsApp) NÃO deve aparecer
    expect(screen.queryByText(/redirecionado ao WhatsApp/i)).not.toBeInTheDocument()
    // E "Pontual" continua sendo a aba ativa
    expect(screen.getByRole('button', { name: 'Pontual' })).toHaveStyle({ fontWeight: '600' })
  })
})

describe('Donation page — preset value buttons', () => {
  it('renders R$30, R$50 and R$100 buttons', () => {
    renderPage()
    expect(screen.getByRole('button', { name: 'R$30' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'R$50' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'R$100' })).toBeInTheDocument()
  })

  it('calls the MP API and redirects to the returned URL', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ url: 'https://mp.com/checkout/123' }),
    }) as jest.Mock

    renderPage()
    await userEvent.click(screen.getByRole('button', { name: 'R$30' }))

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/criar-preferencia',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ valor: 30 }),
      })
    )
    // A asserção que faltava: o usuário é de fato redirecionado ao checkout
    await waitFor(() =>
      expect(redirectMock).toHaveBeenCalledWith('https://mp.com/checkout/123')
    )
  })

  it('shows loading indicator while awaiting MP response', async () => {
    let resolve!: (v: unknown) => void
    global.fetch = jest.fn().mockReturnValue(
      new Promise((r) => { resolve = r })
    ) as jest.Mock

    renderPage()
    fireEvent.click(screen.getByRole('button', { name: 'R$50' }))

    await waitFor(() => expect(screen.getByText('...')).toBeInTheDocument())

    await act(async () => {
      resolve({ json: async () => ({ url: 'https://mp.com/123' }) })
    })
  })

  it('re-enables the button and does NOT redirect when the API fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('network down')) as jest.Mock

    renderPage()
    await userEvent.click(screen.getByRole('button', { name: 'R$30' }))

    // Sem redirect
    expect(redirectMock).not.toHaveBeenCalled()
    // Botão volta ao estado normal (mostra "R$30" de novo, não "...")
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'R$30' })).toBeInTheDocument()
    )
  })
})

describe('Donation page — custom value ("Outro valor")', () => {
  it('reveals the input and submits the typed amount to the MP API', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ url: 'https://mp.com/checkout/custom' }),
    }) as jest.Mock

    renderPage()
    await userEvent.click(screen.getByRole('button', { name: 'Outro valor' }))

    const input = screen.getByPlaceholderText('Valor')
    await userEvent.type(input, '75')
    await userEvent.click(screen.getByRole('button', { name: 'Continuar' }))

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/criar-preferencia',
      expect.objectContaining({ body: JSON.stringify({ valor: 75 }) })
    )
    await waitFor(() =>
      expect(redirectMock).toHaveBeenCalledWith('https://mp.com/checkout/custom')
    )
  })
})

describe('Donation page — StatusBanner (retorno do Mercado Pago)', () => {
  it('mostra confirmação quando status=sucesso', () => {
    mockSearchParams = new URLSearchParams('status=sucesso')
    renderPage()
    expect(screen.getByText(/Doação confirmada/i)).toBeInTheDocument()
  })

  it('mostra aviso de pendência quando status=pendente', () => {
    mockSearchParams = new URLSearchParams('status=pendente')
    renderPage()
    expect(screen.getByText(/em processamento/i)).toBeInTheDocument()
  })

  it('mostra mensagem de erro quando status=erro', () => {
    mockSearchParams = new URLSearchParams('status=erro')
    renderPage()
    expect(screen.getByText(/Algo deu errado/i)).toBeInTheDocument()
  })

  it('não mostra banner de status quando não há parâmetro', () => {
    renderPage()
    expect(screen.queryByText(/Doação confirmada/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/em processamento/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Algo deu errado/i)).not.toBeInTheDocument()
  })
})

describe('Donation page — CopyButton (PIX)', () => {
  it('renders the PIX key', () => {
    renderPage()
    expect(screen.getByText('projeto.criere@gmail.com')).toBeInTheDocument()
  })

  it('shows "Copiar" initially', () => {
    renderPage()
    expect(screen.getByRole('button', { name: 'Copiar' })).toBeInTheDocument()
  })

  it('shows "✓ Copiado" after click and copies the PIX key', async () => {
    renderPage()
    await userEvent.click(screen.getByRole('button', { name: 'Copiar' }))
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('projeto.criere@gmail.com')
    expect(screen.getByRole('button', { name: '✓ Copiado' })).toBeInTheDocument()
  })
})

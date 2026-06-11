'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-trust)', color: '#FFFFFF' }}>
      <div className="container" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
        {/* Grid principal */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)'
        }}>
          {/* Coluna 1 - Identidade */}
          <div>
            <img
              src="/images/hero/logo.png"
              alt="Crierê"
              style={{ height: '50px', marginBottom: 'var(--space-sm)' }}
            />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              marginBottom: 'var(--space-md)',
              fontStyle: 'italic'
            }}>
              "Vem sonhar com a gente"
            </p>

            {/* Redes Sociais */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              <a
                href="https://instagram.com/projetocriere"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                📸
              </a>
              <a
                href="https://wa.me/5512999999999"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                💬
              </a>
              <a
                href="https://youtube.com/@projetocriere"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                📺
              </a>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-h4)',
              fontWeight: '600',
              marginBottom: 'var(--space-md)'
            }}>
              Navegação
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <Link
                href="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  transition: 'color 0.2s ease'
                }}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  transition: 'color 0.2s ease'
                }}
              >
                Sobre
              </Link>
              <Link
                href="/voluntarios"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  transition: 'color 0.2s ease'
                }}
              >
                Faça Parte
              </Link>
              <Link
                href="/blog"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  transition: 'color 0.2s ease'
                }}
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-h4)',
              fontWeight: '600',
              marginBottom: 'var(--space-md)'
            }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span style={{ fontSize: '16px' }}>📧</span>
                <a
                  href="mailto:contato@projetocriere.org"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)'
                  }}
                >
                  contato@projetocriere.org
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span style={{ fontSize: '16px' }}>📱</span>
                <a
                  href="tel:+5512999999999"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)'
                  }}
                >
                  (12) 99999-9999
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span style={{ fontSize: '16px' }}>💬</span>
                <a
                  href="https://wa.me/5512999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)'
                  }}
                >
                  WhatsApp
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', marginTop: 'var(--space-sm)' }}>
                <span style={{ fontSize: '16px' }}>📍</span>
                <address style={{
                  color: 'white',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  fontStyle: 'normal',
                  lineHeight: '1.4'
                }}>
                  Caraguatatuba - SP<br />
                  Brasil
                </address>
              </div>
            </div>
          </div>

          {/* Coluna 4 - CTA Final */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-h4)',
              fontWeight: '600',
              marginBottom: 'var(--space-md)'
            }}>
              Faça a diferença
            </h4>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-small)',
              marginBottom: 'var(--space-md)',
              lineHeight: '1.5'
            }}>
              "Cada doação transforma uma criança."
            </p>
            <Link
              href="/contato"
              className="btn btn-ghost-white"
              style={{
                background: '#fff',
                color: 'var(--color-trust)',
                border: 'none'
              }}
            >
              Doe agora
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.2)',
          margin: 'var(--space-lg) 0'
        }}></div>

        {/* Rodapé inferior */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-sm)'
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-small)',
            margin: 0
          }}>
            © {new Date().getFullYear()} Projeto Crierê. Todos os direitos reservados.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-small)',
            margin: 0
          }}>
            Feito com ♥ em Caraguatatuba
          </p>
        </div>
      </div>

      <style jsx>{`
        footer a:hover {
          color: var(--color-primary) !important;
        }

        footer .social-link:hover {
          background: rgba(255,255,255,0.2) !important;
        }

        @media (max-width: 768px) {
          footer .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
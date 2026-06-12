'use client'

import Header from '@/components/Header'
import FooterNew from '@/components/FooterNew'

export default function Home() {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      lineHeight: 1.6,
      color: 'var(--color-text-body)'
    }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-2xl) 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          {/* Eyebrow */}
          <p className="text-eyebrow" style={{ marginBottom: 'var(--space-sm)' }}>
            Projeto Social · Caraguatatuba
          </p>

          {/* H1 */}
          <h1 className="text-display" style={{
            marginBottom: 'var(--space-md)',
            color: 'var(--color-trust)'
          }}>
            Vem sonhar com a gente
          </h1>

          {/* Parágrafo de apoio */}
          <p className="text-body" style={{
            marginBottom: 'var(--space-lg)',
            maxWidth: '560px',
            margin: '0 auto var(--space-lg) auto'
          }}>
            Transformamos vidas através da educação e cultura. Junte-se a nós nessa jornada de amor, aprendizado e esperança para crianças e adolescentes.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-sm)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/sobre" className="btn btn-primary">
              Conheça nosso trabalho
            </a>
            <a href="/voluntarios" className="btn btn-ghost-blue">
              Seja voluntário
            </a>
          </div>

          {/* Indicador de scroll (opcional) */}
          <div style={{
            marginTop: 'var(--space-xl)',
            fontSize: '24px',
            color: 'var(--color-text-secondary)',
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-lg) 0'
      }}>
        <div className="container">
          <div className="bento-grid">
            {/* Card A - span 2 rows */}
            <div style={{
              gridColumn: '1',
              gridRow: '1 / 3',
              minHeight: '320px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'url(/placeholder-children.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(26,45,143,0.7) 0%, transparent 55%)'
              }}></div>
              <div className="image-overlay-text">
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-h4)',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: 0
                }}>
                  Seja a razão do sorriso de uma criança
                </h3>
              </div>
            </div>

            {/* Card B */}
            <div style={{
              gridColumn: '2',
              gridRow: '1',
              minHeight: '160px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'url(/placeholder-activity.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)'
              }}></div>
              <div className="image-overlay-text">
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  color: '#ffffff',
                  margin: 0
                }}>
                  Atividades culturais
                </p>
              </div>
            </div>

            {/* Card C - Métrica */}
            <div style={{
              gridColumn: '2',
              gridRow: '2',
              minHeight: '160px',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
              textAlign: 'center'
            }}>
              <div className="text-metric" style={{ color: '#ffffff', marginBottom: 'var(--space-xs)' }}>
                85%
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                color: '#ffffff',
                margin: 0
              }}>
                Taxa de melhoria escolar
              </p>
            </div>

            {/* Card D - span 2 rows */}
            <div style={{
              gridColumn: '3',
              gridRow: '1 / 3',
              minHeight: '320px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'url(/placeholder-capoeira.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(26,45,143,0.7) 0%, transparent 55%)'
              }}></div>
              <div className="image-overlay-text">
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-h4)',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: 0
                }}>
                  Capoeira e Teatro
                </h3>
              </div>
            </div>

            {/* Card E - CTA Comunidade span 2 rows */}
            <div style={{
              gridColumn: '4',
              gridRow: '1 / 3',
              minHeight: '320px',
              background: 'var(--color-trust)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-lg)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h3)',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: 'var(--space-md)'
              }}>
                Junte-se a nós
              </h3>
              <a href="/voluntarios" className="btn btn-ghost-white">
                Seja voluntário
              </a>
            </div>

            {/* Card F - Ilustração/Gráfico */}
            <div style={{
              gridColumn: '5',
              gridRow: '1',
              minHeight: '160px',
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '40px',
                marginBottom: 'var(--space-sm)'
              }}>
                ⭐
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-eyebrow)',
                color: '#ffffff',
                margin: 0,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>
                UMA CRIANÇA · UM FUTURO
              </p>
            </div>

            {/* Card G */}
            <div style={{
              gridColumn: '5',
              gridRow: '2',
              minHeight: '160px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'url(/placeholder-event.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)'
              }}></div>
              <div className="image-overlay-text">
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  color: '#ffffff',
                  margin: 0
                }}>
                  Inspire mudança
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas Section */}
      <section className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            <div className="metric-card">
              <div className="text-metric">200+</div>
              <p className="text-small">Crianças atendidas por ano</p>
            </div>
            <div className="metric-card">
              <div className="text-metric">12</div>
              <p className="text-small">Oficinas culturais ativas</p>
            </div>
            <div className="metric-card">
              <div className="text-metric">5 anos</div>
              <p className="text-small">De impacto na comunidade</p>
            </div>
            <div className="metric-card">
              <div className="text-metric">85%</div>
              <p className="text-small">Aumento na taxa de alfabetização</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {/* Depoimento 1 */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-lg)'
            }}>
              <div style={{
                fontSize: '80px',
                color: 'var(--color-primary)',
                lineHeight: 1,
                marginBottom: 'var(--space-sm)'
              }}>
                &ldquo;
              </div>
              <p className="text-body" style={{ marginBottom: 'var(--space-lg)' }}>
                O Projeto Crierê transformou a vida do meu filho. Hoje ele tem mais confiança na escola e descobriu um talento incrível na capoeira.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  M
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    Maria Silva
                  </p>
                  <p className="text-small" style={{ margin: 0 }}>
                    Mãe de aluno
                  </p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-lg)'
            }}>
              <div style={{
                fontSize: '80px',
                color: 'var(--color-primary)',
                lineHeight: 1,
                marginBottom: 'var(--space-sm)'
              }}>
                &ldquo;
              </div>
              <p className="text-body" style={{ marginBottom: 'var(--space-lg)' }}>
                Ser voluntária no Crierê é uma experiência única. Ver o brilho nos olhos das crianças quando aprendem algo novo não tem preço.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  A
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    Ana Costa
                  </p>
                  <p className="text-small" style={{ margin: 0 }}>
                    Voluntária
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNew />

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}
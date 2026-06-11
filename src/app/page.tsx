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

      {/* Hero Section with Bento Grid */}
      <section style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-xl) 0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header Content - Ocupa 55% */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--space-lg)',
            maxWidth: '900px',
            margin: '0 auto var(--space-lg) auto',
            flex: '0 0 55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Eyebrow */}
            <p className="text-eyebrow" style={{ marginBottom: 'var(--space-sm)', fontFamily: 'var(--font-adumu)' }}>
              Projeto Crierê
            </p>

            {/* H1 */}
            <h1 className="text-display" style={{
              marginBottom: 'var(--space-md)',
              color: 'var(--color-trust)',
              fontFamily: 'var(--font-adumu)'
            }}>
              Vem sonhar com a gente!
            </h1>

            {/* Parágrafo de apoio */}
            <p className="text-body" style={{
              marginBottom: 'var(--space-lg)',
              maxWidth: '1000px',
              margin: '0 auto var(--space-sm) auto'
            }}>
              Nos ajude a oferecer um espaço seguro, acolhedor e inspirador onde crianças e adolescentes têm acesso gratuito a reforço escolar, oficinas de cultura e atividades de reflexão, conduzidas por uma equipe comprometida com a transformação social por meio do conhecimento, da escuta e do cuidado.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/voluntarios" className="btn btn-primary">
                Seja voluntário
              </a>
            </div>
          </div>

          {/* Bento Grid em formato U - Ocupa 45% */}
          <div style={{
            flex: '0 0 45%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            gridTemplateRows: '1.8fr 1fr 1fr',
            gap: 'var(--space-md)',
            maxHeight: '380px'
          }}>
            {/* Coluna 1 - Card grande (2/3) - em cima */}
            <div style={{
              gridColumn: '1',
              gridRow: '3',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-trust)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
              textAlign: 'center'
            }}>
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

            {/* Coluna 1 - Card pequeno (1/3) - embaixo */}
            <div style={{
              gridColumn: '1',
              gridRow: '1/3',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-accent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-sm)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '24px',
                marginBottom: 'var(--space-xs)'
              }}>
                📚
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                color: '#ffffff',
                margin: 0,
                fontWeight: '600'
              }}>
                Educação
              </p>
            </div>

            {/* Coluna 2 - Card único médio-grande (2/3) */}
            <div style={{
              gridColumn: '2',
              gridRow: '2 / 4',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-primary)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
              textAlign: 'center'
            }}>
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

            {/* Coluna 3 - Card central médio - alinhado na parte baixa do vale */}
            <div style={{
              gridColumn: '3',
              gridRow: '3',
              background: 'var(--color-trust)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
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

            {/* Coluna 4 - Card único médio-grande (2/3) - espelhado */}
            <div style={{
              gridColumn: '4',
              gridRow: '2 / 4',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-accent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                color: '#ffffff',
                margin: 0
              }}>
                Atividades culturais
              </h3>
            </div>

            {/* Coluna 5 - Card grande (2/3) - em cima */}
            <div style={{
              gridColumn: '5',
              gridRow: '1 / 3',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-trust)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-md)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                color: '#ffffff',
                margin: 0
              }}>
                Eventos e celebrações
              </h3>
            </div>

            {/* Coluna 5 - Card pequeno (1/3) - embaixo */}
            <div style={{
              gridColumn: '5',
              gridRow: '3',
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
                Melhoria escolar
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Imagem Impacto - Tela Completa (Quem Somos) */}
      <section id="sobre" style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-lg) 0',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          margin: '0 var(--space-md)',
          maxWidth: '1200px',
          width: '100%'
        }}>
          <img
            src="/images/hero/fazemos-impacto.png"
            alt="Quem somos, o que fazemos e nosso impacto social"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 'var(--radius-lg)'
            }}
          />
        </div>
      </section>
      
            {/* ODS - Objetivos de Desenvolvimento Sustentável */}
      <section style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-lg) 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-h4)',
              fontWeight: '600',
              marginBottom: 'var(--space-lg)',
              color: 'var(--color-trust)'
            }}>
              <a
                href="https://brasil.un.org/pt-br/sdgs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-trust)',
                  textDecoration: 'none'
                }}
              >
                Objetivos de Desenvolvimento Sustentável
              </a>
            </h3>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-lg)',
              flexWrap: 'wrap'
            }}>
              {/* ODS 1 */}
              <a
                href="https://brasil.un.org/pt-br/sdgs/1/key-activities"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src="/images/hero/SDG-1.svg"
                  alt="ODS 1 - Erradicação da pobreza"
                  style={{
                    height: '120px',
                    width: 'auto',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </a>

              {/* ODS 4 */}
              <a
                href="https://brasil.un.org/pt-br/sdgs/4/key-activities"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src="/images/hero/SDG-4.svg"
                  alt="ODS 4 - Educação de qualidade"
                  style={{
                    height: '120px',
                    width: 'auto',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </a>

              {/* ODS 10 */}
              <a
                href="https://brasil.un.org/pt-br/sdgs/10/key-activities"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src="/images/hero/SDG-10.svg"
                  alt="ODS 10 - Redução das desigualdades"
                  style={{
                    height: '120px',
                    width: 'auto',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Seção Simples */}
      <section style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-lg) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 'var(--space-lg)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Missão */}
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-md)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-trust)'
              }}>
                Missão
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                lineHeight: '1.5',
                margin: 0,
                color: 'var(--color-text-body)'
              }}>
                Promover o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade por meio da educação, da cultura e do afeto, criando oportunidades para o aprendizado, a autoestima e o protagonismo juvenil.
              </p>
            </div>

            {/* Visão */}
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-md)',
              borderLeft: '3px solid var(--color-accent)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-trust)'
              }}>
                Visão
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                lineHeight: '1.5',
                margin: 0,
                color: 'var(--color-text-body)'
              }}>
                Ser referência na formação complementar de crianças e adolescentes com um modelo sustentável, afetivo e transformador de educação e cidadania.
              </p>
            </div>

            {/* Valores */}
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-md)',
              borderLeft: '3px solid var(--color-trust)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-trust)'
              }}>
                Valores
              </h3>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                lineHeight: '1.5',
                color: 'var(--color-text-body)'
              }}>
                Educação como ferramenta de transformação • Acolhimento e afeto • Valorização da cultura e identidade • Protagonismo infantojuvenil • Inclusão e equidade • Colaboração e voluntariado • Respeito e ética
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Depoimentos Section - Carrossel */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-sm)' }}>
              O que dizem sobre nós
            </h2>
            <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
              Histórias reais de transformação
            </p>
          </div>

          {/* Carrossel Container */}
          <div style={{
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div
              id="testimonials-carousel"
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                animation: 'scroll 20s linear infinite',
                width: 'calc(280px * 8 + var(--space-md) * 7)' // 8 cards + gaps
              }}
            >
              {/* Depoimento 1 */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  O Projeto Crierê transformou a vida do meu filho. Hoje ele tem mais confiança na escola.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    M
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Maria Silva
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Mãe de aluno
                    </p>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  Ser voluntária no Crierê é única. Ver o brilho nos olhos das crianças não tem preço.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    A
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Ana Costa
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Voluntária
                    </p>
                  </div>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  Minha filha aprendeu capoeira e fez muitos amigos. O ambiente é acolhedor e educativo.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-trust)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    C
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Carla Mendes
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Mãe de aluna
                    </p>
                  </div>
                </div>
              </div>

              {/* Depoimento 4 */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  Participar do projeto me ensinou muito sobre educação social e solidariedade.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    J
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      João Santos
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Voluntário
                    </p>
                  </div>
                </div>
              </div>

              {/* Duplicar os cards para criar loop infinito */}
              {/* Depoimento 1 - Duplicado */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  O Projeto Crierê transformou a vida do meu filho. Hoje ele tem mais confiança na escola.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    M
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Maria Silva
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Mãe de aluno
                    </p>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 - Duplicado */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  Ser voluntária no Crierê é única. Ver o brilho nos olhos das crianças não tem preço.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    A
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Ana Costa
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Voluntária
                    </p>
                  </div>
                </div>
              </div>

              {/* Depoimento 3 - Duplicado */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  Minha filha aprendeu capoeira e fez muitos amigos. O ambiente é acolhedor e educativo.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-trust)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    C
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Carla Mendes
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Mãe de aluna
                    </p>
                  </div>
                </div>
              </div>

              {/* Depoimento 4 - Duplicado */}
              <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                minWidth: '280px',
                flexShrink: 0
              }}>
                <div style={{
                  fontSize: '40px',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-xs)'
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.4',
                  marginBottom: 'var(--space-md)',
                  color: 'var(--color-text-body)'
                }}>
                  Participar do projeto me ensinou muito sobre educação social e solidariedade.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                  }}>
                    J
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      João Santos
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      Voluntário
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagem Apoiar - Tela Completa */}
      <section style={{
        background: 'var(--color-bg)',
        padding: 'var(--space-lg) 0',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          margin: '0 var(--space-md)',
          maxWidth: '1200px',
          width: '100%'
        }}>
          <img
            src="/images/hero/apoiar-contatos-qr.png"
            alt="Como apoiar, QR Code e contatos do Projeto Crierê"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 'var(--radius-lg)'
            }}
          />
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

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * 4 - var(--space-md) * 3));
          }
        }

        #testimonials-carousel:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          #testimonials-carousel {
            animation: scroll 15s linear infinite;
          }
        }

        /* Responsividade para o Bento Grid */
        @media (max-width: 1024px) {
          .bento-grid-u {
            grid-template-columns: repeat(3, 1fr) !important;
            grid-template-rows: repeat(4, 1fr) !important;
            min-height: 600px !important;
          }

          /* Reorganiza os cards em telas menores */
          .bento-grid-u > div:nth-child(1) {
            grid-column: 1 !important;
            grid-row: 1 !important;
          }
          .bento-grid-u > div:nth-child(2) {
            grid-column: 1 !important;
            grid-row: 2 / 4 !important;
          }
          .bento-grid-u > div:nth-child(3) {
            grid-column: 2 / 4 !important;
            grid-row: 1 / 3 !important;
          }
          .bento-grid-u > div:nth-child(4) {
            grid-column: 3 !important;
            grid-row: 1 !important;
          }
          .bento-grid-u > div:nth-child(5) {
            grid-column: 2 / 4 !important;
            grid-row: 3 / 4 !important;
          }
          .bento-grid-u > div:nth-child(6) {
            grid-column: 3 !important;
            grid-row: 2 !important;
          }
        }

        @media (max-width: 768px) {
          /* Hero Section - Ajusta proporções */
          section:first-of-type > .container {
            flex-direction: column !important;
          }

          section:first-of-type > .container > div:first-child {
            flex: 0 0 auto !important;
            margin-bottom: var(--space-lg) !important;
          }

          /* Bento Grid Mobile */
          .bento-grid-u {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(6, 120px) !important;
            min-height: auto !important;
            gap: var(--space-sm) !important;
          }

          /* Em mobile, cada card ocupa uma linha */
          .bento-grid-u > div {
            grid-column: 1 !important;
            grid-row: auto !important;
          }

          /* Ajusta padding dos cards em mobile */
          .bento-grid-u > div {
            padding: var(--space-sm) !important;
          }

          /* Ajusta fonte dos títulos em mobile */
          .bento-grid-u h2 {
            font-size: var(--text-h3) !important;
          }

          .bento-grid-u h3 {
            font-size: var(--text-small) !important;
            font-weight: 600 !important;
          }

          /* Oculta texto descritivo longo em mobile */
          .bento-grid-u > div:nth-child(3) p {
            display: none !important;
          }

          /* Simplifica o card CTA em mobile */
          .bento-grid-u > div:nth-child(5) {
            flex-direction: column !important;
            text-align: center !important;
            gap: var(--space-xs) !important;
          }

          .bento-grid-u > div:nth-child(5) > div {
            margin-bottom: var(--space-xs) !important;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .bento-grid-u > div {
            transition: none !important;
          }
        }

        /* Focus states for accessibility */
        .bento-grid-u a:focus-visible {
          outline: 2px solid var(--color-primary) !important;
          outline-offset: 2px !important;
        }

        /* Hover states for cards */
        .bento-grid-u > div {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .bento-grid-u > div:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-card);
        }
      `}</style>
    </div>
  )
}

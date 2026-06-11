'use client'

import Header from '@/components/Header'
import FooterNew from '@/components/FooterNew'

export default function Sobre() {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      lineHeight: 1.6,
      color: 'var(--color-text-body)'
    }}>
      <Header />
      {/* Hero Section */}
      <section style={{
        background: 'var(--color-trust)',
        padding: 'var(--space-xl) 0',
        color: 'var(--color-text-on-dark)',
        textAlign: 'center'
      }}>
        <div className="container">
          <p className="text-eyebrow" style={{
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-sm)'
          }}>
            Conheça nossa história
          </p>
          <h1 className="text-display" style={{
            color: 'var(--color-text-on-dark)',
            marginBottom: 'var(--space-md)'
          }}>
            Sobre Nós
          </h1>
          <p className="text-body" style={{
            color: 'var(--color-text-on-dark)',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '20px'
          }}>
            Conheça a história, missão e valores que movem o Projeto Crierê na transformação de vidas através da educação e cultura.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-xl)',
            alignItems: 'center'
          }}>
            {/* Coluna de texto */}
            <div>
              <p className="text-eyebrow" style={{ marginBottom: 'var(--space-sm)' }}>
                Nossa História
              </p>
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-md)' }}>
                Quem Somos
              </h2>
              <div style={{
                borderLeft: '4px solid var(--color-primary)',
                paddingLeft: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
              }}>
                <p className="text-body" style={{ marginBottom: 'var(--space-md)' }}>
                  O Projeto Crierê nasceu do sonho de transformar realidades através da educação. Fundado em 2019, começamos com um pequeno grupo de voluntários determinados a fazer a diferença na vida de crianças e adolescentes.
                </p>
                <p className="text-body">
                  Nossa abordagem combina educação formal com expressão artística, criando um ambiente rico em aprendizado e descobertas. Cada sorriso, cada descoberta, cada sonho realizado nos motiva a continuar.
                </p>
              </div>
            </div>

            {/* Coluna de imagem */}
            <div>
              <img
                src="/placeholder-history.jpg"
                alt="História do Projeto Crierê"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-card)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <h2 className="text-h2">Missão, Visão e Valores</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {/* Missão */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '40px',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)'
              }}>
                ❤️
              </div>
              <h3 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                Missão
              </h3>
              <p className="text-body">
                Promover o desenvolvimento integral de crianças e adolescentes através da educação e cultura, oferecendo ferramentas para o crescimento pessoal e social.
              </p>
            </div>

            {/* Visão */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '40px',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)'
              }}>
                👁️
              </div>
              <h3 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                Visão
              </h3>
              <p className="text-body">
                Ser reconhecida como referência em educação social, expandindo nosso impacto para alcançar mais comunidades e inspirar outras organizações.
              </p>
            </div>

            {/* Valores */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '40px',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)'
              }}>
                ⭐
              </div>
              <h3 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                Valores
              </h3>
              <div style={{ textAlign: 'left' }}>
                <p className="text-small" style={{ margin: 'var(--space-xs) 0', fontWeight: '600' }}>• Respeito</p>
                <p className="text-small" style={{ margin: 'var(--space-xs) 0', fontWeight: '600' }}>• Inclusão</p>
                <p className="text-small" style={{ margin: 'var(--space-xs) 0', fontWeight: '600' }}>• Solidariedade</p>
                <p className="text-small" style={{ margin: 'var(--space-xs) 0', fontWeight: '600' }}>• Compromisso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades - Apoio Pedagógico, Oficinas, Eventos */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <h2 className="text-h2">Nosso Trabalho</h2>
            <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Desenvolvemos diferentes frentes para garantir o desenvolvimento completo de cada criança.
            </p>
          </div>

          {/* Tabs ou seções */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 'var(--space-xl)',
            alignItems: 'start'
          }}>
            {/* Lista de atividades */}
            <div>
              <div className="card" style={{ marginBottom: 'var(--space-md)' }}>
                <h3 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                  📚 Apoio Pedagógico
                </h3>
                <p className="text-body">
                  Reforço escolar individualizado focando no desenvolvimento de habilidades fundamentais.
                </p>
                <ul style={{ marginTop: 'var(--space-sm)', paddingLeft: 'var(--space-md)' }}>
                  <li className="text-small">✓ Alfabetização</li>
                  <li className="text-small">✓ Matemática básica</li>
                  <li className="text-small">✓ Leitura e interpretação</li>
                </ul>
              </div>

              <div className="card" style={{ marginBottom: 'var(--space-md)' }}>
                <h3 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                  🎭 Oficinas Culturais
                </h3>
                <p className="text-body">
                  Atividades que desenvolvem criatividade e expressão artística.
                </p>
                <ul style={{ marginTop: 'var(--space-sm)', paddingLeft: 'var(--space-md)' }}>
                  <li className="text-small">✓ Capoeira</li>
                  <li className="text-small">✓ Teatro</li>
                  <li className="text-small">✓ Música e dança</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                  🎉 Eventos
                </h3>
                <p className="text-body">
                  Celebrações que fortalecem laços e criam memórias especiais.
                </p>
                <ul style={{ marginTop: 'var(--space-sm)', paddingLeft: 'var(--space-md)' }}>
                  <li className="text-small">✓ Dia das Crianças</li>
                  <li className="text-small">✓ Natal Solidário</li>
                  <li className="text-small">✓ Festa da Família</li>
                </ul>
              </div>
            </div>

            {/* Galeria de fotos 2x2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-sm)'
            }}>
              <img src="/placeholder-pedagogico.jpg" alt="Apoio pedagógico" style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }} />
              <img src="/placeholder-capoeira.jpg" alt="Capoeira" style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }} />
              <img src="/placeholder-teatro.jpg" alt="Teatro" style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }} />
              <img src="/placeholder-evento.jpg" alt="Eventos" style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Impacto Social - Integrada */}
      <section className="section-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <p className="text-eyebrow">Nosso Impacto</p>
            <h2 className="text-h2">Transformando Realidades</h2>
          </div>

          {/* Contexto Social */}
          <div className="card" style={{
            background: 'var(--color-trust)',
            color: 'var(--color-text-on-dark)',
            marginBottom: 'var(--space-xl)'
          }}>
            <h3 className="text-h3" style={{ color: 'white', marginBottom: 'var(--space-md)' }}>
              Desafio Social
            </h3>
            <p className="text-body" style={{ color: 'white', marginBottom: 'var(--space-md)' }}>
              Em Caraguatatuba, muitas crianças enfrentam dificuldades socioeconômicas que impactam seu desenvolvimento educacional e social.
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-md)'
            }}>
              <p className="text-body" style={{ color: 'white', margin: 0 }}>
                <strong>40% das crianças</strong> da região apresentam defasagem escolar ao ingressar no ensino fundamental.
              </p>
            </div>
          </div>

          {/* Metas e Indicadores */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-xl)'
          }}>
            <div className="card">
              <h4 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                Melhoria na Alfabetização
              </h4>
              <div className="progress-bar" style={{ marginBottom: 'var(--space-sm)' }}>
                <div className="progress-bar-fill" style={{ width: '85%' }}></div>
              </div>
              <p className="text-small">85% das crianças apresentaram melhoria significativa</p>
            </div>

            <div className="card">
              <h4 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                Frequência Escolar
              </h4>
              <div className="progress-bar" style={{ marginBottom: 'var(--space-sm)' }}>
                <div className="progress-bar-fill" style={{ width: '92%' }}></div>
              </div>
              <p className="text-small">92% de frequência média nas escolas</p>
            </div>

            <div className="card">
              <h4 className="text-h4" style={{ marginBottom: 'var(--space-sm)' }}>
                Desenvolvimento Social
              </h4>
              <div className="progress-bar" style={{ marginBottom: 'var(--space-sm)' }}>
                <div className="progress-bar-fill" style={{ width: '78%' }}></div>
              </div>
              <p className="text-small">78% relatam maior confiança e autoestima</p>
            </div>
          </div>

          {/* ODS */}
          <div style={{ textAlign: 'center' }}>
            <h3 className="text-h4" style={{ marginBottom: 'var(--space-md)' }}>
              Objetivos de Desenvolvimento Sustentável
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#E5243B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#C5192D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                4
              </div>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#FF3A21',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                10
              </div>
            </div>
            <p className="text-small" style={{ marginTop: 'var(--space-sm)' }}>
              Erradicação da pobreza • Educação de qualidade • Redução das desigualdades
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'var(--color-primary)',
        padding: 'var(--space-xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 className="text-h2" style={{ color: 'white', marginBottom: 'var(--space-md)' }}>
            Faça Parte da Nossa História
          </h2>
          <p className="text-body" style={{
            color: 'white',
            marginBottom: 'var(--space-lg)',
            maxWidth: '600px',
            margin: '0 auto var(--space-lg) auto'
          }}>
            Junte-se a nós nessa jornada de transformação. Sua participação pode ser o início de uma nova história para muitas crianças.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/voluntarios" className="btn btn-ghost-white">
              Seja voluntário
            </a>
            <a href="/contato" className="btn btn-dark">
              Entre em contato
            </a>
          </div>
        </div>
      </section>

      <FooterNew />

      <style jsx>{`
        @media (max-width: 768px) {
          section .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: var(--space-lg) !important;
          }
        }
      `}</style>
    </div>
  )
}

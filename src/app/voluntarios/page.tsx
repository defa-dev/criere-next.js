'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import FooterNew from '@/components/FooterNew'

const funcoes = [
  {
    titulo: 'Tutor Fixo',
    descricao: 'Dê reforço escolar, planeje atividades e acompanhe o desenvolvimento acadêmico de um aluno.',
    foto: '/images/galeria/volei.jpeg',
    emoji: null,
  },
  {
    titulo: 'Coordenador',
    descricao: 'Acompanhe o desenvolvimento pedagógico dos alunos e apoie tutores na realização das tutorias.',
    foto: null,
    emoji: '💻',
    detalhe: 'Trabalho remoto',
  },
  {
    titulo: 'Oficineiro',
    descricao: 'Traga sua arte e realize uma oficina de cultura!',
    foto: '/images/galeria/pedron.jpeg',
    emoji: null,
  },
  {
    titulo: 'Operacional',
    descricao: 'Atividades administrativas como divulgação, organização de eventos, escala e comunicação.',
    foto: null,
    emoji: '⚙️',
    detalhe: 'Apoio geral',
  },
]

export default function Voluntarios() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    funcao: '',
    motivo: '',
  })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-body)' }}>
      <Header />

      {/* Hero */}
      <section style={{
        position: 'relative',
        height: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/images/galeria/rap.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 var(--space-md)' }}>
          <p style={{ fontFamily: 'var(--font-adumu)', fontSize: 'var(--text-eyebrow)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
            Voluntariado
          </p>
          <h1 style={{ fontFamily: 'var(--font-adumu)', fontSize: 'var(--text-h2)', fontWeight: '700', color: '#ffffff', margin: '0 0 var(--space-md) 0', lineHeight: 1.2 }}>
            Faça parte do Crierê
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'rgba(255,255,255,0.88)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Cada voluntário traz algo único. Encontre a função que combina com você e venha transformar vidas — incluindo a sua.
          </p>
        </div>
      </section>

      {/* Funções */}
      <section style={{ background: 'var(--color-bg)', padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-adumu)', fontSize: 'var(--text-h2)', color: 'var(--color-trust)', margin: '0 0 var(--space-sm) 0' }}>
              Como você quer contribuir?
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
              Temos espaço para diferentes perfis e disponibilidades.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-md)',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            {funcoes.map((f) => (
              <div key={f.titulo} style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Visual */}
                {f.foto ? (
                  <div style={{
                    height: '180px',
                    backgroundImage: `url(${f.foto})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                ) : (
                  <div style={{
                    height: '180px',
                    background: 'var(--color-surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-xs)',
                  }}>
                    <span style={{ fontSize: '52px' }}>{f.emoji}</span>
                    {f.detalhe && (
                      <span style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-secondary)', fontWeight: '600' }}>{f.detalhe}</span>
                    )}
                  </div>
                )}

                {/* Texto */}
                <div style={{ padding: 'var(--space-md)', flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-adumu)', fontSize: 'var(--text-h4)', color: 'var(--color-trust)', margin: '0 0 var(--space-xs) 0' }}>
                    {f.titulo}
                  </h3>
                  <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-body)', lineHeight: '1.5', margin: 0 }}>
                    {f.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section style={{ background: 'var(--color-surface)', padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <h2 style={{ fontFamily: 'var(--font-adumu)', fontSize: 'var(--text-h2)', color: 'var(--color-trust)', margin: '0 0 var(--space-sm) 0' }}>
                Quero me inscrever
              </h2>
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-secondary)' }}>
                Preencha o formulário e entraremos em contato em breve.
              </p>
            </div>

            {enviado ? (
              <div style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-adumu)', fontSize: 'var(--text-h3)', color: 'var(--color-trust)', marginBottom: 'var(--space-sm)' }}>
                  Recebemos sua inscrição!
                </h3>
                <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-secondary)' }}>
                  Obrigado por querer fazer parte do Crierê. Em breve entraremos em contato pelo e-mail ou telefone informados.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
              }}>
                {/* Nome */}
                <div>
                  <label className="label" htmlFor="nome">Nome completo</label>
                  <input
                    className="input"
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                  />
                </div>

                {/* Email + Telefone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                  <div>
                    <label className="label" htmlFor="email">E-mail</label>
                    <input
                      className="input"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="telefone">Telefone</label>
                    <input
                      className="input"
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={form.telefone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Idade + Função */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-md)' }}>
                  <div>
                    <label className="label" htmlFor="idade">Idade</label>
                    <input
                      className="input"
                      id="idade"
                      name="idade"
                      type="number"
                      placeholder="Ex: 24"
                      min="16"
                      value={form.idade}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="funcao">Função de interesse</label>
                    <select
                      className="input"
                      id="funcao"
                      name="funcao"
                      required
                      value={form.funcao}
                      onChange={handleChange}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Selecione uma função</option>
                      <option value="tutor">Tutor Fixo</option>
                      <option value="coordenador">Coordenador</option>
                      <option value="oficineiro">Oficineiro</option>
                      <option value="operacional">Operacional</option>
                    </select>
                  </div>
                </div>

                {/* Motivo */}
                <div>
                  <label className="label" htmlFor="motivo">Por que quer fazer parte do Crierê?</label>
                  <textarea
                    className="input"
                    id="motivo"
                    name="motivo"
                    rows={4}
                    placeholder="Conte um pouco sobre você e sua motivação..."
                    required
                    value={form.motivo}
                    onChange={handleChange}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-xs)' }}>
                  Enviar inscrição
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}

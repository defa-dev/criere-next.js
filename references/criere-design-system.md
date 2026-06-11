# Crierê — Design System & Component Specification
**Versão 1.0 · Para uso pelo time de Front-End**

---

## 1. Design Tokens

### 1.1 Paleta de Cores

| Token | Nome | HEX | Uso primário |
|---|---|---|---|
| `--color-primary` | Laranja Acolhimento | `#FC9307` | CTAs principais, destaques de métricas, ações quentes |
| `--color-primary-hover` | Laranja Escuro | `#D97D06` | Estado hover do botão primário |
| `--color-accent` | Laranja Vívido | `#E84214` | Acento pontual: 1–2 cards no Bento, hover em links de nav |
| `--color-trust` | Azul Profundo | `#1A2D8F` | Títulos H1/H2, botões ghost, overlays de imagem, marcadores numéricos |
| `--color-trust-overlay` | Azul Overlay | `rgba(26, 45, 143, 0.55)` | Gradiente sobre cards de imagem |
| `--color-bg` | Branco Neutro | `#FFFFFF` | Fundo global da página |
| `--color-surface` | Cinza-Claro | `#F5F5F5` | Fundo de seções alternativas (Sobre Nós, Faça Parte) |
| `--color-text-heading` | Azul Profundo | `#1A2D8F` | Títulos serifa (H1, H2) |
| `--color-text-body` | Grafite | `#333333` | Corpo de texto |
| `--color-text-secondary` | Cinza Médio | `#666666` | Legendas, metadados, texto de apoio |
| `--color-text-on-dark` | Branco | `#FFFFFF` | Texto sobre fundos coloridos ou overlays |

---

### 1.2 Tipografia

#### Fontes

| Papel | Família | Peso | Fonte sugerida |
|---|---|---|---|
| Display / Serifa | `--font-display` | 400, 700 | **Playfair Display** (Google Fonts) |
| Body / Sans-serif | `--font-body` | 400, 600 | **Inter** (Google Fonts) |
| Utilitária (labels, badges) | `--font-body` | 400 | Inter — mesmo da body |

#### Escala Tipográfica

| Token | Tamanho | Peso | Família | Uso |
|---|---|---|---|---|
| `--text-display` | 56px / 3.5rem | 700 | Display (serifa) | H1 do Hero |
| `--text-h2` | 40px / 2.5rem | 700 | Display (serifa) | Títulos de seção |
| `--text-h3` | 28px / 1.75rem | 700 | Display (serifa) | Subtítulos de seção |
| `--text-h4` | 20px / 1.25rem | 600 | Body (sans) | Títulos de card |
| `--text-metric` | 52px / 3.25rem | 700 | Body (sans) | Números grandes nos cards de métrica |
| `--text-body` | 18px / 1.125rem | 400 | Body (sans) | Parágrafos |
| `--text-small` | 14px / 0.875rem | 400 | Body (sans) | Legendas, labels, metadados |
| `--text-eyebrow` | 12px / 0.75rem | 600 | Body (sans) | Rótulos uppercase acima de títulos |

#### Regras de uso
- H1 e H2 **sempre** em serifa (Playfair Display).
- Todos os textos de interface — navegação, botões, cards, formulários — em sans-serif (Inter).
- Eyebrows: `letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-primary)`.
- `line-height` padrão: 1.6 para corpo, 1.15 para títulos grandes.

---

### 1.3 Espaçamento

Baseado em múltiplos de 8px:

| Token | Valor | Uso |
|---|---|---|
| `--space-xs` | 8px | Gap interno de componentes pequenos |
| `--space-sm` | 16px | Padding interno de botões; gap entre elementos inline |
| `--space-md` | 24px | Padding de cards; gap entre cards no grid |
| `--space-lg` | 48px | Espaço interno de seções |
| `--space-xl` | 80px | Espaço entre seções na página |
| `--space-2xl` | 120px | Respiro em seções hero |

---

### 1.4 Bordas e Raios

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 12px | Badges, inputs, botões pill pequenos |
| `--radius-md` | 20px | Cards médios, botões principais |
| `--radius-lg` | 28px | Cards grandes do Bento Grid |
| `--radius-full` | 9999px | Avatares, marcadores numéricos circulares |

---

### 1.5 Sombras

Sombras usadas com moderação:

| Token | Valor | Uso |
|---|---|---|
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.07)` | Cards do Bento e seção Quem Somos |
| `--shadow-focus` | `0 0 0 3px rgba(252,147,7,0.35)` | Estado focus acessível em inputs e botões |

---

### 1.6 Breakpoints

| Nome | min-width | Comportamento |
|---|---|---|
| `mobile` | 0 | 1 coluna; Bento vira stack |
| `tablet` | 768px | 2 colunas; Bento simplificado |
| `desktop` | 1024px | Layout completo com Bento assimétrico |
| `wide` | 1280px | `max-width: 1200px` centrado com padding lateral |

---

## 2. Componentes Globais

### 2.1 Header (Navbar)

**Layout:** `display: flex; justify-content: space-between; align-items: center`
**Posição:** `position: sticky; top: 0; z-index: 100`
**Fundo:** `#FFFFFF` com `box-shadow: 0 1px 0 rgba(0,0,0,0.07)` ao scrollar

**Esquerda — Logo**
- SVG ou PNG do logotipo Crierê
- `height: 40px`; link para `/`

**Centro — Navegação**
- Links: `Home`, `Sobre`, `Impacto`, `Faça Parte`, `Blog`, `Contato`
- Fonte: Inter 15px, weight 400, cor `--color-text-body`
- Hover: cor `--color-primary`, transição `color 0.2s ease`
- Link ativo: cor `--color-primary`, `font-weight: 600`

**Direita — CTAs**
- **Botão Primário** ("Doe agora"):
  - `background: var(--color-primary)` · `color: #fff`
  - `border-radius: var(--radius-md)` · `padding: 10px 22px`
  - Hover: `background: var(--color-primary-hover)`
- **Botão Ghost** ("Seja voluntário"):
  - `background: transparent` · `border: 1.5px solid var(--color-trust)`
  - `color: var(--color-trust)` · mesmos padding e raio
  - Hover: `background: rgba(26,45,143,0.06)`

**Mobile:** hambúrguer `☰` na direita, menu fullscreen overlay com fundo `--color-trust`.

---

### 2.2 Footer

**Layout:** 4 colunas no desktop, 2 no tablet, 1 no mobile.
**Fundo:** `--color-trust` (#1A2D8F) · Texto: `#FFFFFF`

**Coluna 1 — Identidade**
- Logo em branco
- Tagline: `"Vem sonhar com a gente"`
- Ícones de redes sociais (Instagram, WhatsApp, YouTube — links clicáveis)

**Coluna 2 — Navegação**
- Links de menu duplicados (Home, Sobre, Impacto, Faça Parte, Blog)

**Coluna 3 — Contato**
- E-mail, telefone, WhatsApp com ícones inline
- Endereço textual

**Coluna 4 — CTA Final**
- Botão "Doe agora" — versão branca: `background: #fff; color: var(--color-trust)`
- Texto: `"Cada doação transforma uma criança."` em `--text-small`

**Rodapé inferior:** barra separadora fina, copyright + `"Feito com ♥ em Caraguatatuba"`.

---

### 2.3 Botões — Resumo Rápido

| Variante | Fundo | Borda | Texto | Hover |
|---|---|---|---|---|
| `btn-primary` | `--color-primary` | nenhuma | branco | `--color-primary-hover` |
| `btn-ghost-blue` | transparente | `--color-trust` 1.5px | `--color-trust` | bg azul 6% opacidade |
| `btn-ghost-white` | transparente | `#fff` 1.5px | branco | bg branco 10% opacidade |
| `btn-dark` | `#1A2D8F` | nenhuma | branco | `#162478` |

Todos: `border-radius: var(--radius-md)`, `padding: 11px 24px`, `font-size: 15px`, `font-weight: 600`, transição 0.2s.

---

## 3. Especificação de Páginas

---

### Página 1 — Home

#### Seção 1.1 — Hero

**Fundo:** `--color-bg` (#FFFFFF)
**Layout:** coluna única centralizada, `max-width: 700px; margin: 0 auto`
**Padding:** `var(--space-2xl)` topo e base

**Componentes:**
1. **Eyebrow label** — `"Projeto Social · Caraguatatuba"` em `--text-eyebrow` laranja
2. **H1** — Fonte serifa, `--text-display`, cor `--color-trust`
   Texto sugerido: `"Vem sonhar com a gente"`
3. **Parágrafo de apoio** — `--text-body`, cor `--color-text-body`, `max-width: 560px`
4. **Grupo de CTAs** — `display: flex; gap: var(--space-sm); justify-content: center`
   - `btn-primary` — "Conheça nosso trabalho" → `/sobre`
   - `btn-ghost-blue` — "Seja voluntário" → `/faca-parte`
5. **Indicador de scroll** — seta animada `↓` sutil abaixo dos botões (opcional, remove em mobile)

---

#### Seção 1.2 — Bento Grid de Destaques

**Fundo:** `--color-bg`
**Estrutura:** CSS Grid com colunas e linhas pré-definidas

```css
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 0.9fr 1fr 1.1fr;
  grid-template-rows: auto auto;
  gap: 16px;
  padding: var(--space-lg) 0;
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
```

**Comportamento dos cards:**
- `border-radius: var(--radius-lg)` em todos
- Cards de imagem: `overflow: hidden; position: relative`
- Texto sobre foto: `position: absolute; bottom: 20px; left: 20px; color: #fff`
- Overlay: `::after { background: linear-gradient(to top, rgba(26,45,143,0.7) 0%, transparent 55%) }`

| Card | Posição no grid | Tipo | Visual |
|---|---|---|---|
| **Card A** | col 1, rows 1–2 | Imagem + texto | Foto de criança. Overlay azul. Texto: `"Seja a razão do sorriso de uma criança"` |
| **Card B** | col 2, row 1 | Imagem + texto | Foto de atividade. Overlay neutro escuro. |
| **Card C** | col 2, row 2 | Métrica | Fundo `--color-primary`. Número grande (`85%`) branco. Label descritivo branco abaixo. |
| **Card D** | col 3, rows 1–2 | Imagem + texto | Foto de capoeira/teatro. Overlay azul. |
| **Card E** | col 4, rows 1–2 | CTA Comunidade | Fundo `--color-trust`. Título branco: `"Junte-se a nós"`. Mini-botão `btn-ghost-white` interno. |
| **Card F** | col 5, row 1 | Ilustração/Gráfico | Fundo `--color-accent` (#E84214). Elemento SVG branco (ex: uma estrela ou traço orgânico). Texto em CAPS: `"UMA CRIANÇA · UM FUTURO"` |
| **Card G** | col 5, row 2 | Imagem + texto | Foto de evento. Overlay escuro neutro. Texto curto: `"Inspire mudança"` |

**Alturas sugeridas:**
- Cards full-span de 2 linhas: `min-height: 320px`
- Cards de 1 linha: `min-height: 160px`

---

#### Seção 1.3 — Métricas

**Fundo:** `--color-surface` (#F5F5F5)
**Layout:** 4 cards em linha, `display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px`
**Mobile:** 2 colunas

**Estrutura de cada card:**
```
┌─────────────────────────┐
│   [Número grande]       │  ← --text-metric, --color-primary
│   [Label descritivo]    │  ← --text-small, --color-text-secondary
└─────────────────────────┘
```
- `background: #fff; border-radius: var(--radius-md); padding: 32px 24px; box-shadow: var(--shadow-card)`
- Linha superior decorativa: `border-top: 3px solid var(--color-primary)`

**Dados esperados (placeholder):**
- `85%` · Aumento na taxa de alfabetização
- `200+` · Crianças atendidas por ano
- `12` · Oficinas culturais ativas
- `5 anos` · De impacto na comunidade

---

#### Seção 1.4 — Depoimentos / Citações

**Fundo:** `--color-bg`
**Layout:** carrossel horizontal (swipe no mobile) ou grid 2 colunas no desktop

**Estrutura de cada card de depoimento:**
```
┌──────────────────────────────────────┐
│  "                                   │  ← Aspas decorativas --color-primary, 80px
│  [Texto do depoimento]               │  ← --text-body, --color-text-body
│                                      │
│  ● [Foto miniatura]  [Nome]          │  ← avatar 40px circular + nome em bold
│                      [Relação]       │  ← ex: "Mãe de aluno", --text-small
└──────────────────────────────────────┘
```
- `background: --color-surface; border-radius: var(--radius-md); padding: 32px`
- No mobile: um card por vez com dots de paginação abaixo

---

### Página 2 — Sobre Nós

**Fundo geral:** `--color-surface`

#### Seção 2.1 — Quem Somos

**Layout:** 2 colunas 50/50 no desktop, 1 coluna no mobile
**Fundo:** `--color-bg`

- **Coluna esquerda:** foto em destaque com `border-radius: var(--radius-lg)` e `box-shadow: var(--shadow-card)`
- **Coluna direita:**
  - Eyebrow label laranja
  - H2 serifa cor azul
  - Parágrafos explicativos
  - Linha separadora: `border-left: 4px solid var(--color-primary); padding-left: 20px` em bloco de destaque

---

#### Seção 2.2 — Missão, Visão e Valores

**Layout:** 3 cards lado a lado
**Fundo:** `--color-surface`

Estrutura de cada card:
```
┌──────────────────────────┐
│  [Ícone SVG outline]     │  ← 40px, cor --color-primary
│  [Título: Missão]        │  ← H4 sans-serif bold
│  [Texto breve]           │  ← --text-body
└──────────────────────────┘
```
- `background: #fff; border-radius: var(--radius-md); padding: 32px; box-shadow: var(--shadow-card)`
- Hover: `transform: translateY(-4px)` suave

---

#### Seção 2.3 — Atividades (Apoio Pedagógico, Oficinas, Eventos)

**Layout:** lista de abas (Tabs) ou accordion no mobile

**Tabs:**
- Tab ativa: `border-bottom: 2px solid var(--color-primary)`, texto `--color-primary`
- Tab inativa: `color: --color-text-secondary`

**Conteúdo de cada aba:**
- Layout 2 colunas: galeria de fotos (grid 2×2) + texto descritivo + lista de atividades com ícone `✓` laranja

---

### Página 3 — Impacto Social (Infográfico)

**Fundo:** `--color-surface`

#### Seção 3.1 — Chamada da Seção

- Eyebrow label, H2 serifa, parágrafo introdutório
- Layout: centralizado, `max-width: 700px`

#### Seção 3.2 — Desafio Social / Contexto

**Layout:** card largo com fundo `--color-trust`, texto branco
- Título H3 branco
- Texto corpo branco
- Destaque de dado: `background: rgba(255,255,255,0.12); border-radius: var(--radius-sm); padding: 16px`

#### Seção 3.3 — Objetivos e Público-alvo

**Layout:** 2 colunas com ícone + texto cada

#### Seção 3.4 — Metas e Indicadores

**Layout:** grid de 3 cards com progress bar visual
```
┌──────────────────────────────┐
│  [Título da meta]            │
│  ████████░░  75%             │  ← progress bar --color-primary
│  [Descrição do indicador]    │
└──────────────────────────────┘
```
Progress bar: `height: 8px; border-radius: 4px; background: rgba(252,147,7,0.15)`
Preenchimento: `background: var(--color-primary)`

#### Seção 3.5 — ODS (Objetivos de Desenvolvimento Sustentável)

**Layout:** linha de ícones/badges horizontais com tooltip ao hover
- Cada ODS: círculo colorido com número + título abaixo
- Cores dos ODS conforme identidade oficial da ONU (manter para reconhecimento imediato)

#### Seção 3.6 — Recursos e Parcerias

**Layout:** 2 colunas — tabela de custos/receitas à esquerda, lista de parceiros com logos à direita

---

### Página 4 — Faça Parte

**Fundo:** `--color-bg`

#### Seção 4.1 — Perfis de Voluntariado

**Layout:** 3 cards horizontais

```
┌──────────────────────────────────────┐
│  [Ícone]  [Título do perfil]         │  ← H4
│  [Descrição breve]                   │
│  [Lista de requisitos com ✓]         │
│  [btn-primary → formulário]          │
└──────────────────────────────────────┘
```

Cards: `background: --color-surface; border-radius: var(--radius-md); border-top: 4px solid var(--color-primary)`

**Perfis:**
- Tutor Fixo → borda `--color-primary`
- Voluntário de Cultura → borda `--color-accent`
- Apoio Operacional → borda `--color-trust`

#### Seção 4.2 — Formulário de Cadastro

**Layout:** card centralizado, `max-width: 600px`
**Fundo do card:** `#fff`, `box-shadow: var(--shadow-card)`, `border-radius: var(--radius-lg)`, `padding: 40px`

**Campos:**
- Nome completo (input text)
- E-mail (input email)
- Telefone/WhatsApp (input tel)
- Perfil de interesse (select)
- Mensagem / Motivação (textarea)
- Botão submit `btn-primary` full-width

**Estilo dos inputs:**
- `border: 1.5px solid #E0E0E0; border-radius: var(--radius-sm); padding: 12px 16px`
- Focus: `border-color: var(--color-primary); box-shadow: var(--shadow-focus)`
- Label: `--text-small, font-weight: 600, color: --color-text-body`

#### Seção 4.3 — Como Ser Parceiro

**Layout:** 3 cards ou acordeão com 3 modalidades:
- Financiamento (patrocínio)
- Doação de materiais
- Parceria institucional

#### Seção 4.4 — Parceiros Atuais

**Layout:** grid de logos em escala de cinza (grayscale) com transição para cor no hover
- `filter: grayscale(100%); opacity: 0.6` → hover: `filter: none; opacity: 1`

---

### Página 5 — Contato

**Layout:** 2 colunas no desktop

**Coluna esquerda — Informações:**
- Eyebrow, H2, parágrafo
- Lista de contatos:
  - `📧` E-mail clicável (mailto)
  - `📱` Telefone clicável (tel)
  - `💬` WhatsApp (link wa.me)
  - `📸` Instagram (link externo)
- Cada item: `display: flex; gap: 12px; align-items: center`
- Ícone: círculo `40px`, `background: rgba(252,147,7,0.12)`, ícone SVG `--color-primary`

**Coluna direita — Formulário rápido:**
- Mesmo estilo do formulário em Faça Parte (simplificado: Nome, E-mail, Mensagem + botão)

**Seção inferior — Mapa:**
- Embed Google Maps em `border-radius: var(--radius-lg); overflow: hidden; height: 360px`
- Ou placeholder de mapa estático linkando para Google Maps

---

### Página 6 — Blog

**Layout da listagem:** grid 3 colunas desktop, 2 tablet, 1 mobile

**Card de post:**
```
┌────────────────────────────────┐
│  [Imagem de capa]              │  ← aspect-ratio 16/9, border-radius no topo
│  [Tag / Categoria]             │  ← badge --color-primary bg leve, texto laranja
│  [Título do post]              │  ← H4 serifa ou H4 sans bold
│  [Resumo / excerpt]            │  ← --text-small, 2 linhas com clamp
│  [Data] · [Tempo de leitura]   │  ← --text-small, --color-text-secondary
│  [Leia mais →]                 │  ← link texto, --color-primary
└────────────────────────────────┘
```
- `background: #fff; border-radius: var(--radius-md); box-shadow: var(--shadow-card)`
- Hover: `transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.10)`

**Post individual:**
- `max-width: 760px; margin: 0 auto`
- H1 serifa grande, imagem hero full-width com `border-radius: var(--radius-lg)`
- Corpo em `--text-body`, `line-height: 1.8`
- Barra de progresso de leitura no topo da página (fina, `--color-primary`)

---

## 4. Padrões de Interação e Animação

### Regras gerais
- Todas as transições de hover: `transition: all 0.2s ease`
- Scroll-reveal: `opacity: 0 → 1` + `translateY(20px → 0)` com `IntersectionObserver`
- Nenhuma animação decorativa que não comunique algo — o site é institucional

### Scroll behavior
- `scroll-behavior: smooth` global
- Âncoras de navegação para seções internas (ex: `#impacto`, `#voluntario`)

### Estados de acessibilidade
- Todos os elementos interativos com `:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px }`
- Contraste mínimo WCAG AA em todos os pares cor/fundo
- Imagens com `alt` descritivo sempre
- `@media (prefers-reduced-motion: reduce)` — desativa scroll-reveal e transições de transform

---

## 5. Estrutura de Arquivos Sugerida

```
/src
  /components
    Header.jsx (ou .vue / .astro)
    Footer.jsx
    Button.jsx
    Card.jsx
    MetricCard.jsx
    BentoGrid.jsx
    TestimonialCard.jsx
    BlogCard.jsx
    VolunteerCard.jsx
    ContactInfo.jsx
    ProgressBar.jsx
  /pages
    index.jsx          → Home
    sobre.jsx          → Sobre Nós
    impacto.jsx        → Impacto Social
    faca-parte.jsx     → Faça Parte
    contato.jsx        → Contato
    blog/
      index.jsx        → Listagem
      [slug].jsx       → Post individual
  /styles
    tokens.css         → Variáveis CSS (este documento)
    global.css         → Reset + estilos base
    typography.css     → Escala tipográfica
  /assets
    /fonts
    /images
    /icons
```

---

## 6. Checklist de Entrega para o FE

- [ ] Variáveis CSS dos tokens definidas em `:root`
- [ ] Fontes Playfair Display + Inter carregadas via Google Fonts (com `font-display: swap`)
- [ ] Header sticky com scroll shadow
- [ ] Bento Grid responsivo (1 coluna no mobile)
- [ ] Cards de imagem com overlay e texto legível
- [ ] Formulários com estados de focus acessíveis
- [ ] Mapa de contato embutido
- [ ] Scroll-reveal com IntersectionObserver
- [ ] `prefers-reduced-motion` respeitado
- [ ] Contraste WCAG AA verificado
- [ ] Meta tags OG (Open Graph) para compartilhamento social
- [ ] Favicon e ícone de PWA (se aplicável)

---

*Documento preparado como brief de design para desenvolvimento front-end.*
*Textos finais, fotos e conteúdo real a serem inseridos em etapa posterior.*

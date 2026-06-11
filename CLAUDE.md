# Projeto Crierê — Contexto para IAs

## O que é o Crierê

Crierê é um sonho. Sonho dos que vieram antes. Sonho dos ancestrais que viam além do que os olhos podem enxergar. É um sonho coletivo que tem por objetivo potencializar individualidades a favor da comunidade — fazer brilhar a luz que é nossa por direito.

Através da educação e da cultura, o Crierê quer equipar suas pessoas com as ferramentas para viver uma vida cheia de amor, significado e dignidade. O projeto busca resgatar as origens, reaver a identidade roubada: olhar pra trás pra poder ir pra frente.

Crierê tem música, matemática, dança, arte, história e alegria.
Crierê tem fé no futuro, nas crianças.
Crierê resiste, existe e precisa ser sonhado.

O projeto surge também da necessidade de ação — entendendo que o mundo como é precisa de esforços adicionais para minimizar o sofrimento e equilibrar a balança. Como já disse Galo de Luta: organize seu ódio.

---

## Canvas Social

**Desafio Social:** A defasagem do ensino público e o desenvolvimento de crianças e adolescentes enquanto cidadãos.

**Objetivo:** Apoiar no desenvolvimento de jovens em situação de vulnerabilidade social na cidade de São Paulo através de educação e cultura.

**Beneficiados:** Crianças e adolescentes dos 7 aos 17 anos da rede pública em áreas com bolsões de vulnerabilidade social em São Paulo, onde muitas famílias têm acesso limitado a equipamentos culturais e apoio educacional.

**Metas:**
- Melhorar em 30% o desempenho escolar percebido
- Realizar 15 oficinas culturais anualmente
- Realizar 3 eventos anuais comunitários envolvendo as famílias

**Atividades realizadas:**
- Planejamento pedagógico
- Reforço escolar (tutoria)
- Oficinas de cultura
- Captação de voluntários
- Contabilidade
- Acompanhamento com as famílias

**Ações efetivas do projeto:**
1. Tutoria
2. Oficinas de cultura
3. Eventos sazonais (páscoa, dia das crianças, natal, etc.)
4. Rodas de conversa (em desenvolvimento)
5. Mediação de leitura (em desenvolvimento)

**Parceiros:** CEU Butantã, voluntários e oficineiros.

**Receitas:**
- Atualmente: doações de pessoas físicas
- Projeção: patrocínios de empresas locais ou via leis de incentivo; editais públicos e privados

**ODS relacionados:** 04 Educação de qualidade · 10 Redução das desigualdades · 16 Paz, justiça e instituições eficazes

---

## Missão, Visão e Valores

**Missão:** Promover o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade por meio da educação, da cultura e do afeto, criando oportunidades para o aprendizado, a autoestima e o protagonismo juvenil.

**Proposta de Valor:** Oferecemos um espaço seguro, acolhedor e inspirador onde crianças e adolescentes têm acesso gratuito a reforço escolar, oficinas de cultura e atividades de reflexão, conduzidas por uma equipe comprometida com a transformação social por meio do conhecimento, da escuta e do cuidado.

**Visão:** Ser referência na formação complementar de crianças e adolescentes com um modelo sustentável, afetivo e transformador de educação e cidadania.

**Valores:**
- Educação como ferramenta de transformação
- Acolhimento e afeto
- Valorização da cultura e identidade
- Protagonismo infantojuvenil
- Inclusão e equidade
- Colaboração e voluntariado
- Compromisso com redução das desigualdades
- Respeito e ética

---

## Indicadores de Sucesso

- Frequência dos alunos
- Número de oficinas realizadas
- Quantidade de alunos impactados
- Avaliação dos responsáveis
- Melhoria no boletim escolar

**Impacto esperado:**
- Melhoria no desempenho escolar
- Aumento do interesse à cultura, valorização da identidade, fortalecimento da autoestima e aprimoramento de habilidades socioemocionais
- Jovens conscientes de sua identidade, da sociedade em que vivem e equipados com ferramentas para desenvolvimento pessoal e profissional

---

## Stack Técnica

- Next.js 14 com TypeScript e React (`'use client'` onde necessário)
- CSS Flexbox para o Bento Grid (não CSS Grid — fr units não funcionam bem sem altura explícita no pai)
- Design tokens via `src/styles/tokens.css`
- Fonte customizada: Adumu (`@font-face` declarado em `layout.tsx`)
- Google Fonts: Playfair Display + Inter
- Imagens da galeria em `/public/images/galeria/`
- Git remoto: `git@gh-defa:defa-dev/criere-next.js.git` (conta `defa-dev`, SSH alias `gh-defa`)

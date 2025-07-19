# Imagens do Projeto Crierê

## Estrutura de Pastas

### `/hero/`
- **logo.png** - Logo principal do projeto (fundo transparente)
- **logo-white.png** - Logo em branco para fundos escuros (opcional)
- **logo-icon.png** - Apenas o ícone sem texto (opcional)
- **hero-main.jpg** - Imagem principal da homepage (crianças estudando/brincando)
- **hero-overlay.jpg** - Imagem alternativa para overlay

### `/atividades/`
- **apoio-pedagogico.jpg** - Crianças estudando/fazendo lição
- **capoeira.jpg** - Oficina de capoeira
- **teatro.jpg** - Oficina de teatro
- **musica.jpg** - Oficina de música
- **danca.jpg** - Oficina de dança
- **artes.jpg** - Oficina de artes

### `/eventos/`
- **dia-criancas.jpg** - Celebração do Dia das Crianças
- **natal-solidario.jpg** - Evento de Natal Solidário
- **formatura.jpg** - Formatura de turmas
- **festa-junina.jpg** - Festa Junina

### `/voluntarios/`
- **equipe-1.jpg** - Foto da equipe de voluntários
- **voluntario-1.jpg** - Voluntário individual
- **voluntario-2.jpg** - Voluntário individual
- **acao-voluntaria.jpg** - Voluntários em ação

### `/parceiros/`
- **logo-parceiro-1.png** - Logo de parceiro institucional
- **logo-parceiro-2.png** - Logo de parceiro institucional

## Especificações Técnicas

### Formato
- **Fotos**: JPG/JPEG (qualidade 85-90%)
- **Logos**: PNG (com transparência)

### Tamanhos Recomendados
- **Logo principal**: 200x60px (proporção 10:3)
- **Logo versão branca**: 200x60px (mesmo tamanho)
- **Logo ícone**: 60x60px (quadrado)
- **Hero principal**: 1200x800px
- **Cards de atividades**: 600x400px
- **Fotos de eventos**: 800x600px
- **Fotos de voluntários**: 400x400px (quadradas)
- **Logos de parceiros**: 200x100px

### Otimização
- Comprimir imagens para web
- Usar WebP quando possível
- Manter arquivos abaixo de 500KB cada

## Como Usar no Código

```jsx
// Logo usando o componente dedicado
import Logo from '@/components/Logo'

<Logo variant="main" size="md" />           // Logo normal
<Logo variant="white" size="lg" />          // Logo branca
<Logo variant="icon" size="sm" />           // Apenas ícone

// Imagens usando o hook
import { useProjectImages } from '@/hooks/useImages'

const { getLogo, getHeroImage } = useProjectImages()

<Image src={getLogo('main')} alt="Logo" />
<Image src={getHeroImage('main')} alt="Hero" />
```

## Alternativas de Hospedagem

1. **GitHub** (atual) - Gratuito, versionado
2. **Cloudinary** - CDN especializado, otimização automática
3. **Google Drive** - Fácil upload, links públicos
4. **AWS S3** - Profissional, escalável
5. **Vercel** - Integrado com deploy

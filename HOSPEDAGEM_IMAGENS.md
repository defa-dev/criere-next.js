# Guia de Hospedagem de Imagens - Projeto Crierê

## 📁 Opção 1: GitHub (Recomendada) - Gratuita
**✅ Pros:** Versionamento, gratuito, integrado ao projeto  
**❌ Contras:** Limite de 100MB por arquivo, não otimizada para CDN

### Como usar:
1. Adicione suas imagens na pasta `public/images/`
2. Faça commit e push para o GitHub
3. Use no código: `/images/hero/sua-imagem.jpg`

```bash
# Estrutura criada:
public/
  images/
    hero/
    atividades/
    eventos/
    voluntarios/
    parceiros/
```

## 🌟 Opção 2: Cloudinary (Profissional) - Gratuita até 25GB
**✅ Pros:** CDN global, otimização automática, transformações  
**❌ Contras:** Requer configuração

### Setup:
1. Crie conta em [cloudinary.com](https://cloudinary.com)
2. Pegue suas credenciais no dashboard
3. Adicione no `.env.local`:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu-cloud-name
```

### Como usar:
```jsx
// Exemplo de uso
const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_800,h_600/v1/projeto-criere/hero-main`
```

## 📂 Opção 3: Google Drive - Gratuita
**✅ Pros:** Fácil upload, 15GB grátis  
**❌ Contras:** Links podem quebrar, não é CDN

### Como usar:
1. Faça upload das imagens no Google Drive
2. Compartilhe publicamente
3. Use o link direto

## ☁️ Opção 4: AWS S3 + CloudFront - Paga
**✅ Pros:** Escalável, rápido, profissional  
**❌ Contras:** Custo, complexidade

## 🚀 Opção 5: Vercel Blob - Integrada
**✅ Pros:** Integrada com Vercel, simples  
**❌ Contras:** Paga após 1GB

## 🎯 Recomendação Final

### Para desenvolvimento/pequeno projeto:
**GitHub** (`public/images/`) - Simples e grátis

### Para projeto profissional:
**Cloudinary** - Melhor performance e recursos

### Para projeto grande/comercial:
**AWS S3 + CloudFront** - Máxima performance

## 📤 Como migrar as imagens atuais

### 1. Preparar as imagens
```bash
# Criar estrutura local
mkdir -p public/images/{hero,atividades,eventos,voluntarios,parceiros}

# Otimizar imagens (usando ImageOptim, TinyPNG, etc.)
# Renomear seguindo convenção:
# hero-main.jpg
# apoio-pedagogico.jpg
# capoeira.jpg
# etc.
```

### 2. Atualizar o código
```jsx
// Usar o hook criado
import { useProjectImages } from '@/hooks/useImages'

const { getHeroImage, getAtividadeImage } = useProjectImages()

// Em vez de:
bgImage="url('https://unsplash.com/...')"

// Use:
bgImage={`url('${getHeroImage('main')}')`}
```

### 3. Testar localmente
```bash
npm run dev
# Verificar se todas as imagens carregam
```

### 4. Deploy
```bash
git add public/images/
git commit -m "feat: adicionar imagens reais do projeto"
git push origin main
```

## 🔧 Otimizações Avançadas

### Next.js Image Component
```jsx
import Image from 'next/image'

<Image 
  src={getHeroImage('main')}
  alt="Crianças do Projeto Crierê"
  width={1200}
  height={800}
  priority // Para imagens above the fold
  placeholder="blur" // Blur enquanto carrega
  blurDataURL="data:image/jpeg;base64,..." // Base64 blur
/>
```

### WebP + Fallback
```jsx
<picture>
  <source srcSet={`${imagePath}.webp`} type="image/webp" />
  <img src={`${imagePath}.jpg`} alt="..." />
</picture>
```

## 📋 Checklist de Migração
- [ ] Organizar imagens por categoria
- [ ] Otimizar tamanho/qualidade
- [ ] Escolher plataforma de hospedagem
- [ ] Atualizar código usando hook
- [ ] Testar todas as páginas
- [ ] Adicionar alt text apropriado
- [ ] Verificar performance
- [ ] Deploy em produção

## 💡 Dicas Importantes
1. **Sempre** otimize imagens antes do upload
2. Use **WebP** quando possível
3. Implemente **lazy loading** para imagens below the fold
4. Tenha **fallbacks** para imagens que falharem
5. Use **alt text** descritivo para acessibilidade

'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Avatar,
  Divider,
  Button,
  SimpleGrid,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { FaCalendar, FaClock, FaArrowLeft } from 'react-icons/fa'
import NextLink from 'next/link'

const article = {
  title: "Como a educação transformou a vida de 200 crianças na comunidade",
  excerpt: "Descubra as histórias inspiradoras das crianças que participam dos nossos programas educacionais e como eles estão mudando suas perspectivas de futuro.",
  content: `
    <p>Há três anos, o Projeto Crierê iniciou uma jornada transformadora na comunidade do Jardim Esperança. O que começou como um pequeno projeto de reforço escolar se tornou um verdadeiro centro de desenvolvimento educacional e cultural que hoje atende mais de 200 crianças e jovens.</p>

    <h2>Os primeiros passos</h2>
    <p>Em 2022, começamos com apenas 15 crianças em uma pequena sala emprestada pela associação de moradores. A demanda da comunidade era clara: as crianças precisavam de apoio educacional que fosse além da escola formal.</p>

    <p>"Minha filha estava com muitas dificuldades em matemática e português. Quando soube do projeto, não pensei duas vezes", conta Maria dos Santos, mãe da aluna Fernanda, de 9 anos.</p>

    <h2>Metodologia que funciona</h2>
    <p>Nossa abordagem combina reforço escolar personalizado com atividades culturais e artísticas. Cada criança tem um plano de desenvolvimento individual, mas as atividades em grupo fortalecem o senso de comunidade.</p>

    <p>Os números falam por si só:</p>
    <ul>
      <li>85% das crianças melhoraram suas notas em pelo menos uma disciplina</li>
      <li>92% dos pais relatam melhora no comportamento em casa</li>
      <li>78% das crianças desenvolveram novos talentos artísticos</li>
      <li>100% das famílias recomendam o projeto para outras famílias</li>
    </ul>

    <h2>Histórias que inspiram</h2>
    <p>Pedro, de 12 anos, chegou ao projeto com sérias dificuldades de leitura. Hoje, além de ter superado suas limitações, ele lidera o grupo de contação de histórias para as crianças menores.</p>

    <p>"O Pedro não era o mesmo menino. Antes ele era tímido, não gostava de ler. Agora ele conta histórias para toda a família no jantar", emociona-se seu pai, João Silva.</p>

    <h2>O futuro que construímos juntos</h2>
    <p>O impacto vai além das crianças. As famílias se uniram, a comunidade se fortaleceu, e hoje temos uma rede de apoio que se estende por todo o bairro.</p>

    <p>Nosso próximo desafio é expandir para outras comunidades da região, levando essa metodologia que provou ser eficaz para mais famílias que precisam.</p>
  `,
  image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  category: "Impacto Social",
  date: "15 de Janeiro, 2025",
  readTime: "8 min",
  author: {
    name: "Maria Silva",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    bio: "Coordenadora pedagógica do Projeto Crierê há 5 anos"
  }
}

const relatedPosts = [
  {
    id: 2,
    title: "Workshop de arte desenvolve criatividade das crianças",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Atividades Educacionais",
    href: "/blog/workshop-arte-criatividade"
  },
  {
    id: 3,
    title: "Novo programa de reforço escolar mostra resultados",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Impacto Social",
    href: "/blog/reforco-escolar-resultados"
  },
  {
    id: 4,
    title: "Voluntários transformam espaço de leitura da sede",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Voluntariado",
    href: "/blog/voluntarios-espaco-leitura"
  }
]

export default function ArticlePage() {
  return (
    <Box pt="80px" minH="100vh" bg="white">
      {/* Header */}
      <Box bg="gray.50" py={8}>
        <Container maxW="4xl">
          <Button 
            leftIcon={<FaArrowLeft />} 
            variant="ghost" 
            as={NextLink} 
            href="/blog"
            mb={6}
            color="brand.blue"
          >
            Voltar ao blog
          </Button>
          
          <VStack spacing={4} align="start">
            <Badge colorScheme="orange" fontSize="sm" px={3} py={1} borderRadius="full">
              {article.category}
            </Badge>
            
            <Heading size="4xl" color="brand.blue" lineHeight={1.1}>
              {article.title}
            </Heading>
            
            <Text fontSize="xl" color="brand.grayText" lineHeight={1.6}>
              {article.excerpt}
            </Text>
            
            <HStack spacing={6} pt={4}>
              <HStack spacing={3}>
                <Avatar size="md" src={article.author.avatar} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold" color="brand.blue">
                    {article.author.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {article.author.bio}
                  </Text>
                </VStack>
              </HStack>
              
              <VStack align="start" spacing={1}>
                <HStack spacing={4} color="gray.500" fontSize="sm">
                  <HStack>
                    <FaCalendar />
                    <Text>{article.date}</Text>
                  </HStack>
                  <HStack>
                    <FaClock />
                    <Text>{article.readTime} de leitura</Text>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Article Image */}
      <Container maxW="4xl" py={8}>
        <Image 
          src={article.image} 
          alt={article.title}
          w="100%"
          h="400px"
          objectFit="cover"
          borderRadius="lg"
          boxShadow="lg"
        />
      </Container>

      {/* Article Content */}
      <Container maxW="4xl" pb={16}>
        <Box 
          className="article-content"
          fontSize="lg"
          lineHeight={1.8}
          color="brand.darkText"
          sx={{
            'h2': {
              fontSize: '2xl',
              fontWeight: 'bold',
              color: 'brand.blue',
              mt: 8,
              mb: 4,
            },
            'p': {
              mb: 6,
            },
            'ul': {
              pl: 6,
              mb: 6,
            },
            'li': {
              mb: 2,
            }
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </Container>

      <Divider />

      {/* Call to Action */}
      <Box bg="brand.orange" py={16}>
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={6}>
            <Heading size="xl" color="white">
              Quer fazer parte dessa transformação?
            </Heading>
            <Text fontSize="lg" color="orange.100" maxW="600px">
              Junte-se a nós como voluntário ou apoiador e ajude a transformar 
              mais vidas através da educação e cultura.
            </Text>
            <HStack spacing={4}>
              <Button 
                variant="secondary" 
                size="lg"
                as={NextLink}
                href="/voluntarios"
                bg="white"
                color="brand.orange"
                _hover={{ bg: "gray.100" }}
              >
                Seja voluntário
              </Button>
              <Button 
                variant="cta" 
                size="lg"
                as={NextLink}
                href="/contato"
              >
                Entre em contato
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Related Articles */}
      <Container maxW="7xl" py={16}>
        <Heading size="lg" mb={8} color="brand.blue">
          Artigos relacionados
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {relatedPosts.map((post) => (
            <Card 
              key={post.id} 
              overflow="hidden" 
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }} 
              transition="all 0.3s"
              as={NextLink}
              href={post.href}
              cursor="pointer"
            >
              <Image 
                src={post.image} 
                alt={post.title}
                objectFit="cover"
                h="150px"
                w="100%"
              />
              <CardBody>
                <VStack align="start" spacing={3}>
                  <Badge 
                    colorScheme={
                      post.category === "Impacto Social" ? "orange" :
                      post.category === "Atividades Educacionais" ? "blue" : "green"
                    } 
                    fontSize="xs" 
                    px={2} 
                    py={1} 
                    borderRadius="full"
                  >
                    {post.category}
                  </Badge>
                  <Heading size="sm" color="brand.blue" lineHeight={1.3}>
                    {post.title}
                  </Heading>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

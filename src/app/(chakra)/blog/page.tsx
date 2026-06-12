'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Badge,
  HStack,
  VStack,
  Button,
  Flex,
  Avatar,
  Divider,
  Link,
  Input,
} from '@chakra-ui/react'
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa'
import NextLink from 'next/link'

// Dados simulados para o blog
const featuredPost = {
  id: 1,
  title: "Como a educação transformou a vida de 200 crianças na comunidade",
  excerpt: "Descubra as histórias inspiradoras das crianças que participam dos nossos programas educacionais e como eles estão mudando suas perspectivas de futuro.",
  image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Impacto Social",
  date: "15 de Janeiro, 2025",
  readTime: "8 min",
  author: {
    name: "Maria Silva",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
}

const categories = [
  { name: "Histórias de Sucesso", count: 12, color: "brand.orange" },
  { name: "Atividades Educacionais", count: 8, color: "brand.blue" },
  { name: "Eventos Culturais", count: 15, color: "purple.500" },
  { name: "Voluntariado", count: 6, color: "green.500" },
]

const blogPosts = [
  {
    id: 2,
    title: "Workshop de arte desenvolve criatividade das crianças",
    excerpt: "Nossos workshops de arte têm sido fundamentais para desenvolver a criatividade e autoestima dos participantes.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Atividades Educacionais",
    date: "12 de Janeiro, 2025",
    readTime: "5 min",
    author: { name: "João Santos", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  },
  {
    id: 3,
    title: "Festa junina reúne mais de 500 pessoas da comunidade",
    excerpt: "A tradicional festa junina do Projeto Crierê fortaleceu os laços comunitários e celebrou nossa cultura.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Eventos Culturais",
    date: "10 de Janeiro, 2025",
    readTime: "4 min",
    author: { name: "Ana Costa", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  },
  {
    id: 4,
    title: "Novo programa de reforço escolar mostra resultados",
    excerpt: "As notas dos alunos participantes do programa de reforço melhoraram em média 40% no último semestre.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Impacto Social",
    date: "8 de Janeiro, 2025",
    readTime: "6 min",
    author: { name: "Carlos Lima", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  },
  {
    id: 5,
    title: "Voluntários transformam espaço de leitura da sede",
    excerpt: "Com muito carinho e dedicação, nossos voluntários renovaram completamente o espaço de leitura das crianças.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Voluntariado",
    date: "5 de Janeiro, 2025",
    readTime: "3 min",
    author: { name: "Lucia Ferreira", avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  },
  {
    id: 6,
    title: "Oficina de música desperta talentos na comunidade",
    excerpt: "Descobrimos novos talentos musicais entre as crianças e jovens que participam das nossas oficinas.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Atividades Educacionais",
    date: "3 de Janeiro, 2025",
    readTime: "7 min",
    author: { name: "Roberto Oliveira", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  },
  {
    id: 7,
    title: "Parceria com escola local amplia nosso alcance",
    excerpt: "Nova parceria permitirá que mais crianças tenham acesso aos nossos programas educacionais.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Impacto Social",
    date: "1 de Janeiro, 2025",
    readTime: "5 min",
    author: { name: "Patricia Alves", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  }
]

export default function BlogPage() {
  return (
    <Box pt="80px" minH="100vh" bg="gray.50">
      {/* Header Section */}
      <Box bg="white" py={16}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="4xl" color="brand.blue">
              Blog do Projeto Crierê
            </Heading>
            <Text fontSize="xl" color="brand.grayText" maxW="600px">
              Acompanhe as histórias, conquistas e momentos especiais que vivenciamos
              junto com nossa comunidade todos os dias.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Categories */}
      <Container maxW="7xl" py={8}>
        <Heading size="lg" mb={6} color="brand.blue">
          Tópicos em Destaque
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {categories.map((category) => (
            <Card key={category.name} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }} transition="all 0.2s">
              <CardBody textAlign="center">
                <Text fontWeight="semibold" color={category.color} mb={2}>
                  {category.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {category.count} artigos
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <Divider />

      {/* Featured Post */}
      <Container maxW="7xl" py={16}>
        <Heading size="lg" mb={8} color="brand.blue">
          Artigo em Destaque
        </Heading>
        <Card overflow="hidden" _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }} transition="all 0.3s">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
            <Image 
              src={featuredPost.image} 
              alt={featuredPost.title}
              objectFit="cover"
              h={{ base: "250px", lg: "400px" }}
              w="100%"
            />
            <CardBody p={8}>
              <VStack align="start" spacing={4} h="100%">
                <Badge colorScheme="orange" fontSize="sm" px={3} py={1} borderRadius="full">
                  {featuredPost.category}
                </Badge>
                <Heading size="xl" color="brand.blue" lineHeight={1.2}>
                  {featuredPost.title}
                </Heading>
                <Text color="brand.grayText" fontSize="lg" lineHeight={1.6}>
                  {featuredPost.excerpt}
                </Text>
                <HStack spacing={4} color="gray.500" fontSize="sm">
                  <HStack>
                    <FaCalendar />
                    <Text>{featuredPost.date}</Text>
                  </HStack>
                  <HStack>
                    <FaClock />
                    <Text>{featuredPost.readTime} de leitura</Text>
                  </HStack>
                </HStack>
                <HStack spacing={3}>
                  <Avatar size="sm" src={featuredPost.author.avatar} />
                  <Text fontSize="sm" color="gray.600">
                    Por {featuredPost.author.name}
                  </Text>
                </HStack>
                <Button 
                  variant="primary" 
                  rightIcon={<FaArrowRight />}
                  mt="auto"
                  size="lg"
                >
                  Ler artigo completo
                </Button>
              </VStack>
            </CardBody>
          </SimpleGrid>
        </Card>
      </Container>

      <Divider />

      {/* Blog Posts Grid */}
      <Container maxW="7xl" py={16}>
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg" color="brand.blue">
            Últimas Histórias
          </Heading>
          <Button variant="secondary" as={NextLink} href="/blog/todas">
            Ver todos os artigos
          </Button>
        </Flex>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              overflow="hidden" 
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }} 
              transition="all 0.3s"
              h="100%"
            >
              <Image 
                src={post.image} 
                alt={post.title}
                objectFit="cover"
                h="200px"
                w="100%"
              />
              <CardBody>
                <VStack align="start" spacing={3} h="100%">
                  <Badge 
                    colorScheme={
                      post.category === "Impacto Social" ? "orange" :
                      post.category === "Atividades Educacionais" ? "blue" :
                      post.category === "Eventos Culturais" ? "purple" : "green"
                    } 
                    fontSize="xs" 
                    px={2} 
                    py={1} 
                    borderRadius="full"
                  >
                    {post.category}
                  </Badge>
                  <Heading size="md" color="brand.blue" lineHeight={1.3}>
                    {post.title}
                  </Heading>
                  <Text color="brand.grayText" fontSize="sm" lineHeight={1.5} flex="1">
                    {post.excerpt}
                  </Text>
                  <HStack spacing={3} fontSize="xs" color="gray.500">
                    <HStack>
                      <FaCalendar />
                      <Text>{post.date}</Text>
                    </HStack>
                    <HStack>
                      <FaClock />
                      <Text>{post.readTime}</Text>
                    </HStack>
                  </HStack>
                  <HStack spacing={2}>
                    <Avatar size="xs" src={post.author.avatar} />
                    <Text fontSize="xs" color="gray.600">
                      {post.author.name}
                    </Text>
                  </HStack>
                  <Link 
                    color="brand.orange" 
                    fontWeight="semibold" 
                    fontSize="sm"
                    _hover={{ color: "brand.blue" }}
                  >
                    Ler mais →
                  </Link>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Newsletter Subscription */}
      <Box bg="brand.blue" py={16}>
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={6}>
            <Heading size="xl" color="white">
              Não perca nenhuma história
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="500px">
              Receba as últimas notícias e histórias inspiradoras do Projeto Crierê 
              diretamente no seu email.
            </Text>
            <HStack spacing={4} w="100%" maxW="500px">
              <Box flex="1">
                <Input 
                  placeholder="Seu melhor email"
                  bg="white"
                  borderRadius="md"
                  size="lg"
                  color="gray.700"
                  _placeholder={{ color: "gray.400" }}
                />
              </Box>
              <Button variant="cta" size="lg" px={8}>
                Inscrever-se
              </Button>
            </HStack>
            <Text fontSize="sm" color="gray.400">
              Prometemos não enviar spam. Você pode cancelar a qualquer momento.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Card,
  CardBody,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaHeart, FaGraduationCap, FaMusic, FaUsers } from 'react-icons/fa'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, brand.orange, orange.300, white)"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px" position="relative" zIndex={1}>
          <VStack spacing={8} textAlign="center">
            <Heading
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="extrabold"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              lineHeight={0.9}
            >
              Vem sonhar
              <br />
              com a gente!
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="white"
              maxW="600px"
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
              fontWeight="medium"
            >
              Transformamos vidas através da educação e cultura. 
              Junte-se ao Projeto Crierê e faça parte dessa jornada de esperança e crescimento.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                variant="secondary"
                as={NextLink}
                href="/sobre"
              >
                Conheça Nosso Trabalho
              </Button>
              <Button
                size="lg"
                variant="primary"
                as={NextLink}
                href="/voluntarios"
              >
                Seja Voluntário
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxW="1200px" py={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="center">
          <VStack>
            <Icon as={FaUsers} w={12} h={12} color="brand.orange" />
            <Heading size="2xl" color="brand.blue">500+</Heading>
            <Text color="brand.grayText">Crianças atendidas</Text>
          </VStack>
          <VStack>
            <Icon as={FaGraduationCap} w={12} h={12} color="brand.orange" />
            <Heading size="2xl" color="brand.blue">15</Heading>
            <Text color="brand.grayText">Anos de experiência</Text>
          </VStack>
          <VStack>
            <Icon as={FaMusic} w={12} h={12} color="brand.orange" />
            <Heading size="2xl" color="brand.blue">20+</Heading>
            <Text color="brand.grayText">Oficinas culturais</Text>
          </VStack>
          <VStack>
            <Icon as={FaHeart} w={12} h={12} color="brand.orange" />
            <Heading size="2xl" color="brand.blue">100+</Heading>
            <Text color="brand.grayText">Voluntários ativos</Text>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Sobre Section */}
      <Box bg="brand.lightGray" py={16}>
        <Container maxW="1200px">
          <VStack spacing={8}>
            <Heading size="3xl" color="brand.blue" textAlign="center">
              Quem Somos
            </Heading>
            <Text fontSize="lg" lineHeight={1.8} textAlign="center" maxW="800px">
              O Projeto Crierê é uma organização dedicada ao desenvolvimento 
              integral de crianças e adolescentes através da educação e cultura. 
              Acreditamos que todo sonho é possível quando oferecemos as 
              ferramentas certas para o crescimento.
            </Text>
            <Button
              variant="primary"
              size="lg"
              as={NextLink}
              href="/sobre"
            >
              Saiba Mais
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Atividades Section */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Nosso Trabalho
            </Heading>
            <Text fontSize="lg" color="brand.grayText" maxW="600px">
              Desenvolvemos diferentes frentes de atuação para garantir o 
              desenvolvimento completo de cada criança e adolescente.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Card
              borderTop="4px solid"
              borderTopColor="brand.orange"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
            >
              <CardBody p={8}>
                <VStack spacing={4} align="start">
                  <Icon as={FaGraduationCap} w={10} h={10} color="brand.orange" />
                  <Heading size="lg" color="brand.blue">
                    Apoio Pedagógico
                  </Heading>
                  <Text>
                    Reforço escolar individualizado para crianças com 
                    dificuldades de aprendizagem, focando no desenvolvimento 
                    de habilidades fundamentais.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card
              borderTop="4px solid"
              borderTopColor="brand.orange"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
            >
              <CardBody p={8}>
                <VStack spacing={4} align="start">
                  <Icon as={FaMusic} w={10} h={10} color="brand.orange" />
                  <Heading size="lg" color="brand.blue">
                    Oficinas Culturais
                  </Heading>
                  <Text>
                    Capoeira, teatro, música, dança e muito mais! 
                    Atividades que desenvolvem criatividade, disciplina 
                    e expressão artística.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card
              borderTop="4px solid"
              borderTopColor="brand.orange"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
            >
              <CardBody p={8}>
                <VStack spacing={4} align="start">
                  <Icon as={FaHeart} w={10} h={10} color="brand.orange" />
                  <Heading size="lg" color="brand.blue">
                    Eventos Comemorativos
                  </Heading>
                  <Text>
                    Dia das Crianças, Natal Solidário e outras celebrações 
                    especiais que fortalecem laços e criam memórias 
                    inesquecíveis.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg="brand.blue" py={16}>
        <Container maxW="1200px" textAlign="center">
          <VStack spacing={8}>
            <Heading size="3xl" color="white">
              Venha Fazer a Diferença
            </Heading>
            <Text fontSize="lg" color="white" maxW="600px">
              Sua participação pode transformar vidas. Seja como voluntário, 
              parceiro ou apoiador, juntos podemos construir um futuro melhor 
              para nossas crianças.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                variant="secondary"
                bg="white"
                color="brand.blue"
                as={NextLink}
                href="/voluntarios"
              >
                Seja Voluntário
              </Button>
              <Button
                size="lg"
                variant="primary"
                as={NextLink}
                href="/contato"
              >
                Entre em Contato
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

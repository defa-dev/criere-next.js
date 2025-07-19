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
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaHeart, FaGraduationCap, FaMusic, FaUsers } from 'react-icons/fa'
import Layout from '@/components/Layout'
import { useProjectImages } from '@/hooks/useImages'
import Image from 'next/image'

export default function Home() {
  const { getHeroImage } = useProjectImages()

  return (
    <Layout>
      {/* Hero Section - Estilo Dropbox */}
      <Box position="relative" minH="100vh" overflow="hidden" bg="brand.blue">
        {/* Background dividido verticalmente */}
        <Box position="absolute" top={0} left={0} right={0} bottom={0}>
          <HStack spacing={0} h="100vh">
            {/* Seção esquerda - azul escuro (1/3) */}
            <Box 
              bg="brand.blue" 
              w="33vw" 
              h="100vh"
            />
            {/* Seção direita - laranja claro (2/3) */}
            <Box 
              bg="brand.orange" 
              w="67vw" 
              h="100vh"
              borderTopLeftRadius={{ base: "0", md: "200px" }} // Valor customizado entre 3xl e full
            />
          </HStack>
        </Box>

        {/* Conteúdo sobreposto */}
        <Container maxW="1200px" position="relative" zIndex={10} pt="120px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center" minH="80vh">
            {/* Coluna de imagem - posicionada no encontro das duas seções (ESQUERDA) */}
            <Box 
              position="relative" 
              display="flex" 
              justifyContent="center" 
              alignItems="center"
              transform={{ lg: "translateX(-50px)" }} // Move para a esquerda para ficar no encontro
            >
              <Box
                w={{ base: "300px", md: "400px", lg: "450px" }}
                h={{ base: "300px", md: "400px", lg: "450px" }}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                border="px solid white"
                bg="white"
                position="relative"
              >
                {/* Imagem principal */}
                <Box
                  w="100%"
                  h="100%"
                  bgImage={`url('${getHeroImage('main')}')`}
                  bgSize="cover"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  position="relative"
                >
                </Box>
              </Box>

              {/* Cards flutuantes */}
              <Card
                position="absolute"
                top={{ base: "20px", lg: "40px" }}
                left={{ base: "-40px", lg: "-60px" }}
                w="150px"
                boxShadow="xl"
                transform="rotate(-5deg)"
                bg="brand.orange"
                color="white"
              >
                <CardBody p={4} textAlign="center">
                  <Icon as={FaHeart} w={6} h={6} mb={2} />
                  <Text fontSize="sm" fontWeight="bold">
                    15 anos de amor
                  </Text>
                </CardBody>
              </Card>

              <Card
                position="absolute"
                bottom={{ base: "40px", lg: "60px" }}
                right={{ base: "-40px", lg: "-60px" }}
                w="120px"
                boxShadow="xl"
                transform="rotate(8deg)"
                bg="white"
                border="2px solid"
                borderColor="brand.blue"
              >
                <CardBody p={3} textAlign="center">
                  <Icon as={FaUsers} w={5} h={5} mb={2} color="brand.blue" />
                  <Text fontSize="xs" fontWeight="bold" color="brand.blue">
                    100+ voluntários
                  </Text>
                </CardBody>
              </Card>
            </Box>

            {/* Coluna de texto (DIREITA) - cor dinâmica conforme o fundo */}
            <VStack spacing={8} align="start">
              <Image 
              src={getHeroImage('logo')}
              width={300} 
              height={10} 
              alt="Crianças do Projeto Crierê"
              />
              <Heading
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="extrabold"
                lineHeight={0.9}
                color={{ base: "white", lg: "brand.blue" }} // Branco no mobile, azul no desktop
              >
                Vem sonhar
                <br />
                com a gente!
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={{ base: "white", lg: "brand.darkText" }} // Branco no mobile, texto escuro no desktop
                maxW="500px"
                fontWeight="medium"
                lineHeight={1.6}
              >
                Transformamos vidas através da educação e cultura. 
                Junte-se a nós nessa jornada de amor, aprendizado e esperança.
              </Text>
              
              <VStack spacing={4} align="start" w="full">
                <Button 
                  variant="cta" 
                  size="lg" 
                  as={NextLink} 
                  href="/sobre"
                  px={8}
                  fontSize="lg"
                >
                  Conheça nossa história
                </Button>
                
                <HStack spacing={4}>
                  <Button 
                    variant="secondary" 
                    size="md" 
                    as={NextLink} 
                    href="/voluntarios"
                    bg={{ base: "white", lg: "brand.blue" }}
                    color={{ base: "brand.blue", lg: "white" }}
                    _hover={{ bg: { base: "gray.100", lg: "brand.darkBlue" } }}
                  >
                    Seja voluntário
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="md" 
                    as={NextLink} 
                    href="/contato"
                    color={{ base: "white", lg: "brand.blue" }}
                    borderWidth="2px"
                    borderColor={{ base: "white", lg: "brand.blue" }}
                    _hover={{ bg: { base: "whiteAlpha.200", lg: "brand.lightGray" } }}
                  >
                    Entre em contato
                  </Button>
                </HStack>
              </VStack>
            </VStack>

          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxW="1200px" py={16}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" color="brand.orange" fontWeight="extrabold">
              500+
            </StatNumber>
            <StatLabel color="brand.blue" fontSize="lg" fontWeight="semibold">
              Crianças atendidas
            </StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" color="brand.orange" fontWeight="extrabold">
              15
            </StatNumber>
            <StatLabel color="brand.blue" fontSize="lg" fontWeight="semibold">
              Anos de experiência
            </StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" color="brand.orange" fontWeight="extrabold">
              20+
            </StatNumber>
            <StatLabel color="brand.blue" fontSize="lg" fontWeight="semibold">
              Oficinas culturais
            </StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" color="brand.orange" fontWeight="extrabold">
              100+
            </StatNumber>
            <StatLabel color="brand.blue" fontSize="lg" fontWeight="semibold">
              Voluntários ativos
            </StatLabel>
          </Stat>
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

'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaEye, FaHeart, FaStar, FaUsers, FaHandsHelping, FaGraduationCap } from 'react-icons/fa'
import Layout from '@/components/Layout'

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-br, brand.blue, blue.600)"
        py={20}
        color="white"
      >
        <Container maxW="1200px">
          <VStack spacing={6} textAlign="center">
            <Heading size="4xl" fontWeight="extrabold">
              Sobre Nós
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Conheça a história, missão e valores que movem o Projeto Crierê 
              na transformação de vidas através da educação e cultura.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Nossa História */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Nossa História
            </Heading>
            <Text fontSize="lg" maxW="800px" lineHeight={1.8}>
              O Projeto Crierê nasceu do sonho de transformar realidades através da educação. 
              Fundado em 2009, começamos com um pequeno grupo de voluntários determinados 
              a fazer a diferença na vida de crianças e adolescentes em situação de 
              vulnerabilidade social.
            </Text>
          </VStack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            gap={12}
          >
            <Box flex={1}>
              <VStack align="start" spacing={6}>
                <Text fontSize="lg" lineHeight={1.8}>
                  Ao longo dos anos, crescemos e nos especializamos em oferecer 
                  apoio pedagógico individualizado e oficinas culturais diversas. 
                  Nossa abordagem combina educação formal com expressão artística, 
                  criando um ambiente rico em aprendizado e descobertas.
                </Text>
                <Text fontSize="lg" lineHeight={1.8}>
                  Hoje, atendemos mais de 500 crianças e adolescentes, contamos 
                  com uma equipe de mais de 100 voluntários e mantemos parcerias 
                  sólidas com a comunidade local. Nossa jornada é feita de pequenas 
                  vitórias diárias que se transformam em grandes conquistas.
                </Text>
                <Text fontSize="lg" lineHeight={1.8} fontWeight="semibold" color="brand.orange">
                  Cada sorriso, cada descoberta, cada sonho realizado nos motiva 
                  a continuar construindo um futuro melhor para nossas crianças.
                </Text>
              </VStack>
            </Box>
            <Box flex={1}>
              <Box
                w="100%"
                h="400px"
                bg="brand.lightGray"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xl"
                fontWeight="bold"
                color="brand.grayText"
              >
                [Imagem: Timeline da história do projeto]
              </Box>
            </Box>
          </Flex>
        </VStack>
      </Container>

      {/* Missão, Visão e Valores */}
      <Box bg="brand.lightGray" py={16}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <Heading size="3xl" color="brand.blue" textAlign="center">
              Missão, Visão e Valores
            </Heading>

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
              {/* Missão */}
              <Card
                borderTop="6px solid"
                borderTopColor="brand.orange"
                bg="white"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="center" textAlign="center">
                    <Icon as={FaHeart} w={12} h={12} color="brand.orange" />
                    <Heading size="lg" color="brand.blue">
                      Nossa Missão
                    </Heading>
                    <Text fontSize="lg" lineHeight={1.8}>
                      Promover o desenvolvimento integral de crianças e adolescentes 
                      através da educação e cultura, oferecendo ferramentas para o 
                      crescimento pessoal, social e acadêmico, contribuindo para a 
                      construção de uma sociedade mais justa e igualitária.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              {/* Visão */}
              <Card
                borderTop="6px solid"
                borderTopColor="brand.blue"
                bg="white"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="center" textAlign="center">
                    <Icon as={FaEye} w={12} h={12} color="brand.blue" />
                    <Heading size="lg" color="brand.blue">
                      Nossa Visão
                    </Heading>
                    <Text fontSize="lg" lineHeight={1.8}>
                      Ser reconhecida como referência em educação social e cultural, 
                      expandindo nosso impacto para alcançar mais comunidades e 
                      inspirar outras organizações a investirem no potencial 
                      transformador da educação.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              {/* Valores */}
              <Card
                borderTop="6px solid"
                borderTopColor="brand.orange"
                bg="white"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="center" textAlign="center">
                    <Icon as={FaStar} w={12} h={12} color="brand.orange" />
                    <Heading size="lg" color="brand.blue">
                      Nossos Valores
                    </Heading>
                    <VStack spacing={3} align="start">
                      <Text fontWeight="semibold">• Respeito</Text>
                      <Text fontWeight="semibold">• Inclusão</Text>
                      <Text fontWeight="semibold">• Solidariedade</Text>
                      <Text fontWeight="semibold">• Transparência</Text>
                      <Text fontWeight="semibold">• Compromisso</Text>
                      <Text fontWeight="semibold">• Inovação</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Nossos Princípios */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Como Trabalhamos
            </Heading>
            <Text fontSize="lg" maxW="800px">
              Nossos princípios norteiam cada ação e decisão, garantindo que 
              mantenhamos nossa essência e qualidade em tudo que fazemos.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Card borderLeft="4px solid" borderLeftColor="brand.orange">
              <CardBody p={6}>
                <HStack spacing={4} align="start">
                  <Icon as={FaUsers} w={8} h={8} color="brand.orange" mt={1} />
                  <VStack align="start" spacing={3}>
                    <Heading size="md" color="brand.blue">
                      Abordagem Individualizada
                    </Heading>
                    <Text>
                      Cada criança é única. Desenvolvemos planos personalizados 
                      que respeitam o ritmo e as necessidades específicas de 
                      cada participante.
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>

            <Card borderLeft="4px solid" borderLeftColor="brand.orange">
              <CardBody p={6}>
                <HStack spacing={4} align="start">
                  <Icon as={FaHandsHelping} w={8} h={8} color="brand.orange" mt={1} />
                  <VStack align="start" spacing={3}>
                    <Heading size="md" color="brand.blue">
                      Educação com Afeto
                    </Heading>
                    <Text>
                      Acreditamos que o aprendizado acontece em ambiente de 
                      confiança e carinho. Priorizamos vínculos saudáveis e 
                      relacionamentos positivos.
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>

            <Card borderLeft="4px solid" borderLeftColor="brand.orange">
              <CardBody p={6}>
                <HStack spacing={4} align="start">
                  <Icon as={FaGraduationCap} w={8} h={8} color="brand.orange" mt={1} />
                  <VStack align="start" spacing={3}>
                    <Heading size="md" color="brand.blue">
                      Formação Continuada
                    </Heading>
                    <Text>
                      Investimos na capacitação constante de nossa equipe, 
                      garantindo que estejamos sempre atualizados com as 
                      melhores práticas educacionais.
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>

            <Card borderLeft="4px solid" borderLeftColor="brand.orange">
              <CardBody p={6}>
                <HStack spacing={4} align="start">
                  <Icon as={FaUsers} w={8} h={8} color="brand.orange" mt={1} />
                  <VStack align="start" spacing={3}>
                    <Heading size="md" color="brand.blue">
                      Participação da Família
                    </Heading>
                    <Text>
                      Reconhecemos a importância da família no desenvolvimento 
                      das crianças e buscamos envolver os responsáveis em 
                      nossa missão educativa.
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Call to Action */}
      <Box bg="brand.orange" py={16}>
        <Container maxW="1200px" textAlign="center">
          <VStack spacing={8}>
            <Heading size="3xl" color="white">
              Faça Parte da Nossa História
            </Heading>
            <Text fontSize="lg" color="white" maxW="600px">
              Junte-se a nós nessa jornada de transformação. Sua participação 
              pode ser o início de uma nova história para muitas crianças.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

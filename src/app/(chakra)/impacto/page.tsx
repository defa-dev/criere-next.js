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
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { 
  FaGraduationCap, 
  FaChartLine, 
  FaUsers, 
  FaHeart,
  FaBookOpen,
  FaMedal,
  FaGlobe,
  FaCheck
} from 'react-icons/fa'
import Layout from '@/components/Layout'

export default function Impacto() {
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
              Nosso Impacto Social
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Conheça os resultados transformadores que alcançamos juntos 
              e como contribuímos para um futuro melhor através da educação.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Estatísticas Principais */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Números que Transformam
            </Heading>
            <Text fontSize="lg" maxW="800px">
              Cada número representa uma vida transformada, um sonho realizado 
              e uma família fortalecida através da educação.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={8}>
                <Stat>
                  <StatLabel color="brand.grayText" fontSize="sm">
                    CRIANÇAS ATENDIDAS
                  </StatLabel>
                  <StatNumber color="brand.blue" fontSize="4xl" fontWeight="bold">
                    500+
                  </StatNumber>
                  <StatHelpText color="green.500">
                    <StatArrow type="increase" />
                    23% desde 2023
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>

            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={8}>
                <Stat>
                  <StatLabel color="brand.grayText" fontSize="sm">
                    MELHORIA NO DESEMPENHO
                  </StatLabel>
                  <StatNumber color="brand.blue" fontSize="4xl" fontWeight="bold">
                    85%
                  </StatNumber>
                  <StatHelpText color="green.500">
                    das crianças melhoraram notas
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>

            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={8}>
                <Stat>
                  <StatLabel color="brand.grayText" fontSize="sm">
                    FREQUÊNCIA ESCOLAR
                  </StatLabel>
                  <StatNumber color="brand.blue" fontSize="4xl" fontWeight="bold">
                    92%
                  </StatNumber>
                  <StatHelpText color="green.500">
                    <StatArrow type="increase" />
                    12% de aumento
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>

            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={8}>
                <Stat>
                  <StatLabel color="brand.grayText" fontSize="sm">
                    ANOS DE ATUAÇÃO
                  </StatLabel>
                  <StatNumber color="brand.blue" fontSize="4xl" fontWeight="bold">
                    15
                  </StatNumber>
                  <StatHelpText color="brand.grayText">
                    de dedicação contínua
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Metas e Indicadores */}
      <Box bg="brand.lightGray" py={16}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <VStack spacing={6} textAlign="center">
              <Heading size="3xl" color="brand.blue">
                Metas e Indicadores de Sucesso
              </Heading>
              <Text fontSize="lg" maxW="800px">
                Monitoramos nosso progresso através de indicadores claros 
                que nos ajudam a melhorar continuamente nossa atuação.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
              {/* Objetivos Educacionais */}
              <Card>
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack>
                      <Icon as={FaGraduationCap} w={8} h={8} color="brand.orange" />
                      <Heading size="lg" color="brand.blue">
                        Objetivos Educacionais
                      </Heading>
                    </HStack>

                    <VStack spacing={4} w="full">
                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontWeight="bold">Melhoria do Desempenho Escolar</Text>
                          <Text fontWeight="bold" color="brand.orange">85%</Text>
                        </Flex>
                        <Progress value={85} colorScheme="orange" />
                        <Text fontSize="sm" color="brand.grayText" mt={1}>
                          Meta: 80% | Alcançado: 85%
                        </Text>
                      </Box>

                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontWeight="bold">Aumento da Frequência Escolar</Text>
                          <Text fontWeight="bold" color="brand.orange">92%</Text>
                        </Flex>
                        <Progress value={92} colorScheme="orange" />
                        <Text fontSize="sm" color="brand.grayText" mt={1}>
                          Meta: 90% | Alcançado: 92%
                        </Text>
                      </Box>

                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontWeight="bold">Redução da Evasão Escolar</Text>
                          <Text fontWeight="bold" color="brand.orange">95%</Text>
                        </Flex>
                        <Progress value={95} colorScheme="orange" />
                        <Text fontSize="sm" color="brand.grayText" mt={1}>
                          Meta: 85% | Alcançado: 95%
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>

              {/* Objetivos Sociais */}
              <Card>
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack>
                      <Icon as={FaUsers} w={8} h={8} color="brand.orange" />
                      <Heading size="lg" color="brand.blue">
                        Objetivos Sociais
                      </Heading>
                    </HStack>

                    <VStack spacing={4} w="full">
                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontWeight="bold">Participação em Atividades Culturais</Text>
                          <Text fontWeight="bold" color="brand.orange">78%</Text>
                        </Flex>
                        <Progress value={78} colorScheme="orange" />
                        <Text fontSize="sm" color="brand.grayText" mt={1}>
                          Meta: 75% | Alcançado: 78%
                        </Text>
                      </Box>

                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontWeight="bold">Desenvolvimento de Habilidades Sociais</Text>
                          <Text fontWeight="bold" color="brand.orange">88%</Text>
                        </Flex>
                        <Progress value={88} colorScheme="orange" />
                        <Text fontSize="sm" color="brand.grayText" mt={1}>
                          Meta: 80% | Alcançado: 88%
                        </Text>
                      </Box>

                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontWeight="bold">Engajamento Familiar</Text>
                          <Text fontWeight="bold" color="brand.orange">71%</Text>
                        </Flex>
                        <Progress value={71} colorScheme="orange" />
                        <Text fontSize="sm" color="brand.grayText" mt={1}>
                          Meta: 70% | Alcançado: 71%
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Alinhamento com ODS */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS)
            </Heading>
            <Text fontSize="lg" maxW="800px">
              Nosso trabalho contribui diretamente para o alcance dos Objetivos 
              de Desenvolvimento Sustentável da ONU.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            {/* ODS 4 - Educação de Qualidade */}
            <Card 
              borderTop="6px solid"
              borderTopColor="#C5192D"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              transition="all 0.3s"
            >
              <CardBody p={8}>
                <VStack spacing={6} align="center" textAlign="center">
                  <Box
                    w={20}
                    h={20}
                    bg="#C5192D"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="3xl"
                    fontWeight="bold"
                  >
                    4
                  </Box>
                  <VStack spacing={3}>
                    <Heading size="lg" color="brand.blue">
                      Educação de Qualidade
                    </Heading>
                    <Text>
                      Assegurar a educação inclusiva, equitativa e de qualidade, 
                      promovendo oportunidades de aprendizagem ao longo da vida.
                    </Text>
                  </VStack>
                  <VStack spacing={2} align="start" w="full">
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Apoio pedagógico individualizado</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Acesso à educação complementar</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Desenvolvimento de habilidades</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* ODS 10 - Redução das Desigualdades */}
            <Card 
              borderTop="6px solid"
              borderTopColor="#DD1367"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              transition="all 0.3s"
            >
              <CardBody p={8}>
                <VStack spacing={6} align="center" textAlign="center">
                  <Box
                    w={20}
                    h={20}
                    bg="#DD1367"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    10
                  </Box>
                  <VStack spacing={3}>
                    <Heading size="lg" color="brand.blue">
                      Redução das Desigualdades
                    </Heading>
                    <Text>
                      Reduzir a desigualdade dentro dos países e entre eles, 
                      promovendo a inclusão social e econômica.
                    </Text>
                  </VStack>
                  <VStack spacing={2} align="start" w="full">
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Atendimento gratuito para famílias vulneráveis</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Inclusão de crianças com deficiência</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Igualdade de oportunidades</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* ODS 16 - Paz, Justiça e Instituições Eficazes */}
            <Card 
              borderTop="6px solid"
              borderTopColor="#00689D"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              transition="all 0.3s"
            >
              <CardBody p={8}>
                <VStack spacing={6} align="center" textAlign="center">
                  <Box
                    w={20}
                    h={20}
                    bg="#00689D"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    16
                  </Box>
                  <VStack spacing={3}>
                    <Heading size="lg" color="brand.blue">
                      Paz, Justiça e Instituições Eficazes
                    </Heading>
                    <Text>
                      Promover sociedades pacíficas e inclusivas, proporcionando 
                      acesso à justiça para todos.
                    </Text>
                  </VStack>
                  <VStack spacing={2} align="start" w="full">
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Prevenção da violência infantil</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Promoção da cultura de paz</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text fontSize="sm">Fortalecimento comunitário</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Histórias de Sucesso */}
      <Box bg="brand.orange" py={16}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <VStack spacing={6} textAlign="center">
              <Heading size="3xl" color="white">
                Histórias de Transformação
              </Heading>
              <Text fontSize="lg" color="white" maxW="800px">
                Cada número conta uma história. Conheça alguns dos resultados 
                que mais nos orgulham.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Card bg="white">
                <CardBody p={8}>
                  <VStack spacing={4} align="start">
                    <HStack>
                      <Icon as={FaMedal} w={8} h={8} color="brand.orange" />
                      <Badge colorScheme="orange" fontSize="sm">
                        EDUCAÇÃO
                      </Badge>
                    </HStack>
                    <Heading size="md" color="brand.blue">
                      Maria Silva - 14 anos
                    </Heading>
                    <Text>
                      &quot;Chegou ao projeto com dificuldades em matemática e português. 
                      Após 2 anos de acompanhamento, conseguiu uma bolsa de estudos 
                      integral em uma escola particular e hoje é uma das melhores 
                      alunas da turma.&quot;
                    </Text>
                    <HStack spacing={4}>
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color="brand.orange">Antes</Text>
                        <Text fontSize="sm">Nota 4.2</Text>
                      </VStack>
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color="brand.orange">Depois</Text>
                        <Text fontSize="sm">Nota 9.1</Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg="white">
                <CardBody p={8}>
                  <VStack spacing={4} align="start">
                    <HStack>
                      <Icon as={FaHeart} w={8} h={8} color="brand.orange" />
                      <Badge colorScheme="blue" fontSize="sm">
                        CULTURA
                      </Badge>
                    </HStack>
                    <Heading size="md" color="brand.blue">
                      João Pedro - 12 anos
                    </Heading>
                    <Text>
                      &quot;Descobriu seu talento para a música nas oficinas de violão. 
                      Hoje integra uma banda jovem da comunidade e já se apresentou 
                      em diversos eventos. Sonha em ser músico profissional.&quot;
                    </Text>
                    <HStack spacing={4}>
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color="brand.orange">Conquista</Text>
                        <Text fontSize="sm">1º lugar em festival</Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Relatório Anual */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={8} textAlign="center">
          <VStack spacing={4}>
            <Heading size="3xl" color="brand.blue">
              Transparência e Prestação de Contas
            </Heading>
            <Text fontSize="lg" maxW="600px">
              Acreditamos na transparência como pilar fundamental. 
              Confira nossos relatórios anuais e saiba como utilizamos os recursos.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Card 
              borderTop="4px solid"
              borderTopColor="brand.orange"
              _hover={{ cursor: 'pointer', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              <CardBody p={6} textAlign="center">
                <VStack spacing={3}>
                  <Icon as={FaBookOpen} w={10} h={10} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Relatório 2023
                  </Heading>
                  <Text fontSize="sm">
                    Atividades, resultados e aplicação de recursos do ano de 2023
                  </Text>
                  <Badge colorScheme="green">Disponível</Badge>
                </VStack>
              </CardBody>
            </Card>

            <Card 
              borderTop="4px solid"
              borderTopColor="brand.orange"
              _hover={{ cursor: 'pointer', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              <CardBody p={6} textAlign="center">
                <VStack spacing={3}>
                  <Icon as={FaChartLine} w={10} h={10} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Demonstrativo Financeiro
                  </Heading>
                  <Text fontSize="sm">
                    Balanço financeiro transparente com origem e destino dos recursos
                  </Text>
                  <Badge colorScheme="green">Atualizado</Badge>
                </VStack>
              </CardBody>
            </Card>

            <Card 
              borderTop="4px solid"
              borderTopColor="brand.orange"
              _hover={{ cursor: 'pointer', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              <CardBody p={6} textAlign="center">
                <VStack spacing={3}>
                  <Icon as={FaGlobe} w={10} h={10} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Impacto Social
                  </Heading>
                  <Text fontSize="sm">
                    Medição detalhada do impacto social e ambiental de nossas ações
                  </Text>
                  <Badge colorScheme="blue">Em breve</Badge>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>
    </Layout>
  )
}

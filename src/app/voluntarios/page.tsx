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
  Button,
  Badge,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  useToast,
  Divider,
} from '@chakra-ui/react'
import { 
  FaGraduationCap, 
  FaMusic, 
  FaUsers, 
  FaHeart,
  FaHandshake,
  FaClock,
  FaUserGraduate,
  FaPalette
} from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import Layout from '@/components/Layout'

interface VolunteerFormData {
  nome: string
  email: string
  telefone: string
  idade: string
  profissao: string
  experiencia: string
  areas: string[]
  disponibilidade: string
  motivacao: string
  aceiteTermos: boolean
}

export default function Voluntarios() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<VolunteerFormData>()
  const toast = useToast()

  const onSubmit = async (data: VolunteerFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Inscrição enviada com sucesso!",
      description: "Entraremos em contato em breve para os próximos passos.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    
    reset()
  }

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
              Seja Voluntário
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Transforme vidas e seja transformado. Junte-se à nossa equipe 
              de voluntários e faça parte dessa jornada de amor e educação.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Por que ser voluntário */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Por que ser Voluntário?
            </Heading>
            <Text fontSize="lg" maxW="800px" lineHeight={1.8}>
              Ser voluntário no Projeto Crierê é uma experiência transformadora. 
              Você não apenas ajuda a construir o futuro de crianças e adolescentes, 
              mas também desenvolve novas habilidades e faz parte de uma 
              comunidade incrível.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={6}>
                <VStack spacing={4}>
                  <Icon as={FaHeart} w={12} h={12} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Impacto Real
                  </Heading>
                  <Text>
                    Veja de perto a transformação na vida das crianças e 
                    sinta o impacto direto do seu trabalho voluntário.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={6}>
                <VStack spacing={4}>
                  <Icon as={FaUsers} w={12} h={12} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Comunidade
                  </Heading>
                  <Text>
                    Faça parte de uma equipe unida, com pessoas que 
                    compartilham os mesmos valores e propósitos.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={6}>
                <VStack spacing={4}>
                  <Icon as={FaUserGraduate} w={12} h={12} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Desenvolvimento
                  </Heading>
                  <Text>
                    Desenvolva novas habilidades, ganhe experiência e 
                    cresça pessoal e profissionalmente.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card textAlign="center" borderTop="4px solid" borderTopColor="brand.orange">
              <CardBody p={6}>
                <VStack spacing={4}>
                  <Icon as={FaHandshake} w={12} h={12} color="brand.orange" />
                  <Heading size="md" color="brand.blue">
                    Networking
                  </Heading>
                  <Text>
                    Conecte-se com profissionais de diversas áreas que 
                    também acreditam no poder da educação.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Perfis de Voluntariado */}
      <Box bg="brand.lightGray" py={16}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <VStack spacing={6} textAlign="center">
              <Heading size="3xl" color="brand.blue">
                Perfis de Voluntariado
              </Heading>
              <Text fontSize="lg" maxW="800px">
                Oferecemos diferentes oportunidades de voluntariado para que 
                você possa contribuir da melhor forma com suas habilidades e disponibilidade.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
              {/* Tutor Fixo */}
              <Card 
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack>
                      <Icon as={FaGraduationCap} w={8} h={8} color="brand.orange" />
                      <Badge colorScheme="orange" fontSize="sm">
                        COMPROMISSO ALTO
                      </Badge>
                    </HStack>
                    <VStack align="start" spacing={3}>
                      <Heading size="lg" color="brand.blue">
                        Tutor Fixo
                      </Heading>
                      <Text>
                        Acompanhamento pedagógico individualizado de crianças 
                        com dificuldades de aprendizagem. Compromisso de 
                        pelo menos 6 meses.
                      </Text>
                    </VStack>
                    <VStack align="start" spacing={2} w="full">
                      <Text fontWeight="bold" color="brand.blue">Requisitos:</Text>
                      <Text fontSize="sm">• Ensino médio completo</Text>
                      <Text fontSize="sm">• Disponibilidade de 4h/semana</Text>
                      <Text fontSize="sm">• Paciência e didática</Text>
                      <Text fontSize="sm">• Compromisso de longo prazo</Text>
                    </VStack>
                    <VStack align="start" spacing={2} w="full">
                      <Text fontWeight="bold" color="brand.blue">Horários:</Text>
                      <Text fontSize="sm">Segunda a Sexta: 14h às 18h</Text>
                      <Text fontSize="sm">Sábados: 8h às 12h</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>

              {/* Voluntário de Cultura */}
              <Card 
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack>
                      <Icon as={FaMusic} w={8} h={8} color="brand.orange" />
                      <Badge colorScheme="blue" fontSize="sm">
                        FLEXÍVEL
                      </Badge>
                    </HStack>
                    <VStack align="start" spacing={3}>
                      <Heading size="lg" color="brand.blue">
                        Voluntário de Cultura
                      </Heading>
                      <Text>
                        Ministra oficinas de música, dança, teatro, capoeira, 
                        artes plásticas ou outras atividades culturais e 
                        esportivas.
                      </Text>
                    </VStack>
                    <VStack align="start" spacing={2} w="full">
                      <Text fontWeight="bold" color="brand.blue">Requisitos:</Text>
                      <Text fontSize="sm">• Experiência na área cultural</Text>
                      <Text fontSize="sm">• Disponibilidade de 2h/semana</Text>
                      <Text fontSize="sm">• Criatividade e dinamismo</Text>
                      <Text fontSize="sm">• Amor por ensinar</Text>
                    </VStack>
                    <VStack align="start" spacing={2} w="full">
                      <Text fontWeight="bold" color="brand.blue">Áreas:</Text>
                      <Text fontSize="sm">Música, Dança, Teatro, Capoeira</Text>
                      <Text fontSize="sm">Artes Plásticas, Esportes</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>

              {/* Apoio Operacional */}
              <Card 
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack>
                      <Icon as={FaUsers} w={8} h={8} color="brand.orange" />
                      <Badge colorScheme="green" fontSize="sm">
                        PONTUAL
                      </Badge>
                    </HStack>
                    <VStack align="start" spacing={3}>
                      <Heading size="lg" color="brand.blue">
                        Apoio Operacional
                      </Heading>
                      <Text>
                        Auxilia em eventos, campanhas, atividades administrativas 
                        e outras demandas pontuais da organização.
                      </Text>
                    </VStack>
                    <VStack align="start" spacing={2} w="full">
                      <Text fontWeight="bold" color="brand.blue">Atividades:</Text>
                      <Text fontSize="sm">• Organização de eventos</Text>
                      <Text fontSize="sm">• Campanhas de arrecadação</Text>
                      <Text fontSize="sm">• Apoio administrativo</Text>
                      <Text fontSize="sm">• Marketing e comunicação</Text>
                    </VStack>
                    <VStack align="start" spacing={2} w="full">
                      <Text fontWeight="bold" color="brand.blue">Perfil ideal:</Text>
                      <Text fontSize="sm">Organizado, proativo e comunicativo</Text>
                      <Text fontSize="sm">Disponibilidade para finais de semana</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Formulário de Inscrição */}
      <Container maxW="800px" py={16}>
        <VStack spacing={8}>
          <VStack spacing={4} textAlign="center">
            <Heading size="3xl" color="brand.blue">
              Inscreva-se Agora
            </Heading>
            <Text fontSize="lg" color="brand.grayText">
              Preencha o formulário abaixo e dê o primeiro passo para fazer 
              parte da nossa equipe de voluntários.
            </Text>
          </VStack>

          <Card w="full">
            <CardBody p={8}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired isInvalid={!!errors.nome}>
                      <FormLabel color="brand.blue" fontWeight="bold">
                        Nome Completo
                      </FormLabel>
                      <Input
                        {...register('nome', { required: 'Nome é obrigatório' })}
                        placeholder="Seu nome completo"
                        focusBorderColor="brand.orange"
                      />
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.email}>
                      <FormLabel color="brand.blue" fontWeight="bold">
                        E-mail
                      </FormLabel>
                      <Input
                        {...register('email', { 
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'E-mail inválido'
                          }
                        })}
                        type="email"
                        placeholder="seu@email.com"
                        focusBorderColor="brand.orange"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired isInvalid={!!errors.telefone}>
                      <FormLabel color="brand.blue" fontWeight="bold">
                        Telefone
                      </FormLabel>
                      <Input
                        {...register('telefone', { required: 'Telefone é obrigatório' })}
                        placeholder="(11) 99999-9999"
                        focusBorderColor="brand.orange"
                      />
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.idade}>
                      <FormLabel color="brand.blue" fontWeight="bold">
                        Idade
                      </FormLabel>
                      <Input
                        {...register('idade', { required: 'Idade é obrigatória' })}
                        type="number"
                        placeholder="25"
                        focusBorderColor="brand.orange"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired isInvalid={!!errors.profissao}>
                    <FormLabel color="brand.blue" fontWeight="bold">
                      Profissão/Ocupação
                    </FormLabel>
                    <Input
                      {...register('profissao', { required: 'Profissão é obrigatória' })}
                      placeholder="Sua profissão ou ocupação atual"
                      focusBorderColor="brand.orange"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="brand.blue" fontWeight="bold">
                      Experiência com Educação/Voluntariado
                    </FormLabel>
                    <Textarea
                      {...register('experiencia')}
                      placeholder="Descreva sua experiência anterior com educação, voluntariado ou trabalho com crianças"
                      rows={3}
                      focusBorderColor="brand.orange"
                    />
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.areas}>
                    <FormLabel color="brand.blue" fontWeight="bold">
                      Áreas de Interesse (selecione uma ou mais)
                    </FormLabel>
                    <VStack align="start" spacing={2}>
                      <Checkbox {...register('areas')} value="apoio-pedagogico">
                        Apoio Pedagógico (reforço escolar)
                      </Checkbox>
                      <Checkbox {...register('areas')} value="musica">
                        Música (violão, teclado, canto, etc.)
                      </Checkbox>
                      <Checkbox {...register('areas')} value="danca">
                        Dança (ballet, jazz, hip-hop, etc.)
                      </Checkbox>
                      <Checkbox {...register('areas')} value="teatro">
                        Teatro e expressão corporal
                      </Checkbox>
                      <Checkbox {...register('areas')} value="capoeira">
                        Capoeira
                      </Checkbox>
                      <Checkbox {...register('areas')} value="artes">
                        Artes plásticas (pintura, desenho, artesanato)
                      </Checkbox>
                      <Checkbox {...register('areas')} value="esportes">
                        Esportes e educação física
                      </Checkbox>
                      <Checkbox {...register('areas')} value="apoio-operacional">
                        Apoio operacional (eventos, administrativa)
                      </Checkbox>
                    </VStack>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.disponibilidade}>
                    <FormLabel color="brand.blue" fontWeight="bold">
                      Disponibilidade
                    </FormLabel>
                    <Select
                      {...register('disponibilidade', { required: 'Disponibilidade é obrigatória' })}
                      placeholder="Selecione sua disponibilidade"
                      focusBorderColor="brand.orange"
                    >
                      <option value="manha">Manhã (8h às 12h)</option>
                      <option value="tarde">Tarde (14h às 18h)</option>
                      <option value="noite">Noite (18h às 20h)</option>
                      <option value="sabado">Sábados</option>
                      <option value="flexivel">Horário flexível</option>
                      <option value="finais-semana">Finais de semana apenas</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.motivacao}>
                    <FormLabel color="brand.blue" fontWeight="bold">
                      Por que quer ser voluntário do Projeto Crierê?
                    </FormLabel>
                    <Textarea
                      {...register('motivacao', { required: 'Motivação é obrigatória' })}
                      placeholder="Conte-nos sobre sua motivação para ser voluntário..."
                      rows={4}
                      focusBorderColor="brand.orange"
                    />
                  </FormControl>

                  <Divider />

                  <FormControl isRequired isInvalid={!!errors.aceiteTermos}>
                    <Checkbox
                      {...register('aceiteTermos', { required: 'Aceite dos termos é obrigatório' })}
                      colorScheme="orange"
                    >
                      <Text fontSize="sm">
                        Aceito os termos de voluntariado e autorizo o uso dos meus dados 
                        para fins de seleção e comunicação. Comprometo-me a cumprir 
                        com as responsabilidades assumidas caso seja selecionado(a).
                      </Text>
                    </Checkbox>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    w="full"
                    isLoading={isSubmitting}
                    loadingText="Enviando inscrição..."
                  >
                    Enviar Inscrição
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>
        </VStack>
      </Container>

      {/* Próximos Passos */}
      <Box bg="brand.orange" py={16}>
        <Container maxW="1200px">
          <VStack spacing={8} textAlign="center">
            <Heading size="3xl" color="white">
              Próximos Passos
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <VStack spacing={4}>
                <Box
                  w={16}
                  h={16}
                  bg="white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="brand.orange"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  1
                </Box>
                <Text color="white" fontWeight="bold" fontSize="lg">
                  Análise da Inscrição
                </Text>
                <Text color="white" fontSize="sm">
                  Nossa equipe analisará sua inscrição em até 5 dias úteis
                </Text>
              </VStack>

              <VStack spacing={4}>
                <Box
                  w={16}
                  h={16}
                  bg="white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="brand.orange"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  2
                </Box>
                <Text color="white" fontWeight="bold" fontSize="lg">
                  Entrevista
                </Text>
                <Text color="white" fontSize="sm">
                  Conversa informal para nos conhecermos melhor
                </Text>
              </VStack>

              <VStack spacing={4}>
                <Box
                  w={16}
                  h={16}
                  bg="white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="brand.orange"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  3
                </Box>
                <Text color="white" fontWeight="bold" fontSize="lg">
                  Capacitação
                </Text>
                <Text color="white" fontSize="sm">
                  Treinamento para começar suas atividades voluntárias
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

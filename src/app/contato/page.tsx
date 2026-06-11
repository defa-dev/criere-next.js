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
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useToast,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram,
  FaClock 
} from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import Layout from '@/components/Layout'

interface FormData {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
}

export default function Contato() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>()
  const toast = useToast()

  const onSubmit = async (data: FormData) => {
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
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
        bgGradient="linear(to-br, brand.orange, orange.400)"
        py={20}
        color="white"
      >
        <Container maxW="1200px">
          <VStack spacing={6} textAlign="center">
            <Heading size="4xl" fontWeight="extrabold">
              Entre em Contato
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Estamos prontos para ouvir você. Entre em contato conosco 
              e descubra como podemos trabalhar juntos.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1200px" py={16}>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={12}
          alignItems="start"
        >
          {/* Informações de Contato */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="start">
                <Heading size="2xl" color="brand.blue">
                  Fale Conosco
                </Heading>
                <Text fontSize="lg" lineHeight={1.8}>
                  Sua mensagem é importante para nós. Seja para tirar dúvidas, 
                  oferecer ajuda ou conhecer melhor nosso trabalho, estamos 
                  aqui para conversar.
                </Text>
              </VStack>

              <VStack spacing={6} align="stretch">
                <Card borderLeft="4px solid" borderLeftColor="brand.orange">
                  <CardBody p={6}>
                    <HStack spacing={4}>
                      <Icon as={FaPhone} w={6} h={6} color="brand.orange" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="brand.blue">
                          Telefone
                        </Text>
                        <Text>(11) 99999-9999</Text>
                      </VStack>
                    </HStack>
                  </CardBody>
                </Card>

                <Card borderLeft="4px solid" borderLeftColor="brand.orange">
                  <CardBody p={6}>
                    <HStack spacing={4}>
                      <Icon as={FaWhatsapp} w={6} h={6} color="brand.orange" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="brand.blue">
                          WhatsApp
                        </Text>
                        <Text>(11) 99999-9999</Text>
                        <Text fontSize="sm" color="brand.grayText">
                          Disponível das 8h às 18h
                        </Text>
                      </VStack>
                    </HStack>
                  </CardBody>
                </Card>

                <Card borderLeft="4px solid" borderLeftColor="brand.orange">
                  <CardBody p={6}>
                    <HStack spacing={4}>
                      <Icon as={FaEnvelope} w={6} h={6} color="brand.orange" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="brand.blue">
                          E-mail
                        </Text>
                        <Text>contato@projetocriere.org</Text>
                        <Text fontSize="sm" color="brand.grayText">
                          Respondemos em até 24h
                        </Text>
                      </VStack>
                    </HStack>
                  </CardBody>
                </Card>

                <Card borderLeft="4px solid" borderLeftColor="brand.orange">
                  <CardBody p={6}>
                    <HStack spacing={4}>
                      <Icon as={FaInstagram} w={6} h={6} color="brand.orange" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="brand.blue">
                          Instagram
                        </Text>
                        <Text>@projeto.criere</Text>
                        <Text fontSize="sm" color="brand.grayText">
                          Siga-nos para novidades
                        </Text>
                      </VStack>
                    </HStack>
                  </CardBody>
                </Card>

                <Card borderLeft="4px solid" borderLeftColor="brand.orange">
                  <CardBody p={6}>
                    <HStack spacing={4}>
                      <Icon as={FaMapMarkerAlt} w={6} h={6} color="brand.orange" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="brand.blue">
                          Endereço
                        </Text>
                        <Text>Rua das Flores, 123</Text>
                        <Text>Bairro Jardim - São Paulo/SP</Text>
                        <Text>CEP: 01234-567</Text>
                      </VStack>
                    </HStack>
                  </CardBody>
                </Card>

                <Card borderLeft="4px solid" borderLeftColor="brand.orange">
                  <CardBody p={6}>
                    <HStack spacing={4}>
                      <Icon as={FaClock} w={6} h={6} color="brand.orange" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="brand.blue">
                          Horário de Funcionamento
                        </Text>
                        <Text>Segunda a Sexta: 8h às 18h</Text>
                        <Text>Sábados: 8h às 12h</Text>
                        <Text fontSize="sm" color="brand.grayText">
                          Domingos e feriados fechado
                        </Text>
                      </VStack>
                    </HStack>
                  </CardBody>
                </Card>
              </VStack>
            </VStack>
          </GridItem>

          {/* Formulário de Contato */}
          <GridItem>
            <Card>
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <VStack spacing={2} align="start">
                    <Heading size="lg" color="brand.blue">
                      Envie sua Mensagem
                    </Heading>
                    <Text color="brand.grayText">
                      Preencha o formulário abaixo e retornaremos o contato em breve.
                    </Text>
                  </VStack>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack spacing={4}>
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

                      <FormControl>
                        <FormLabel color="brand.blue" fontWeight="bold">
                          Telefone
                        </FormLabel>
                        <Input
                          {...register('telefone')}
                          placeholder="(11) 99999-9999"
                          focusBorderColor="brand.orange"
                        />
                      </FormControl>

                      <FormControl isRequired isInvalid={!!errors.assunto}>
                        <FormLabel color="brand.blue" fontWeight="bold">
                          Assunto
                        </FormLabel>
                        <Select
                          {...register('assunto', { required: 'Assunto é obrigatório' })}
                          placeholder="Selecione um assunto"
                          focusBorderColor="brand.orange"
                        >
                          <option value="voluntariado">Quero ser voluntário</option>
                          <option value="parceria">Proposta de parceria</option>
                          <option value="doacao">Informações sobre doações</option>
                          <option value="inscricao">Inscrição de criança</option>
                          <option value="informacao">Solicitar informações</option>
                          <option value="outro">Outro assunto</option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired isInvalid={!!errors.mensagem}>
                        <FormLabel color="brand.blue" fontWeight="bold">
                          Mensagem
                        </FormLabel>
                        <Textarea
                          {...register('mensagem', { required: 'Mensagem é obrigatória' })}
                          placeholder="Digite sua mensagem aqui..."
                          rows={5}
                          focusBorderColor="brand.orange"
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        w="full"
                        isLoading={isSubmitting}
                        loadingText="Enviando..."
                      >
                        Enviar Mensagem
                      </Button>
                    </VStack>
                  </form>
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Container>

      {/* Mapa */}
      <Box bg="brand.lightGray" py={16}>
        <Container maxW="1200px">
          <VStack spacing={8}>
            <VStack spacing={4} textAlign="center">
              <Heading size="2xl" color="brand.blue">
                Nossa Localização
              </Heading>
              <Text fontSize="lg" color="brand.grayText">
                Venha nos visitar! Estamos localizados no coração da comunidade.
              </Text>
            </VStack>

            <Box
              w="100%"
              h="400px"
              bg="gray.300"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
              fontWeight="bold"
              color="gray.600"
            >
              [Mapa interativo - Google Maps]
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box bg="brand.blue" py={16}>
        <Container maxW="1200px" textAlign="center">
          <VStack spacing={8}>
            <Heading size="3xl" color="white">
              Vamos Conversar?
            </Heading>
            <Text fontSize="lg" color="white" maxW="600px">
              Estamos ansiosos para ouvir suas ideias e descobrir como 
              podemos trabalhar juntos para transformar mais vidas.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as="a"
                href="https://wa.me/5511999999999"
                target="_blank"
                size="lg"
                leftIcon={<Icon as={FaWhatsapp} />}
                variant="secondary"
                bg="white"
                color="brand.blue"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                WhatsApp
              </Button>
              <Button
                as="a"
                href="mailto:contato@projetocriere.org"
                size="lg"
                leftIcon={<Icon as={FaEnvelope} />}
                variant="primary"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                E-mail
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

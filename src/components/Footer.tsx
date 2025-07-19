'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Heading,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa'
import NextLink from 'next/link'

export default function Footer() {
  return (
    <Box
      bg="brand.blue"
      color="white"
      mt={20}
    >
      <Container as={Stack} maxW={'1200px'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading
                fontFamily="heading"
                fontWeight="extrabold"
                fontSize="2xl"
                color="brand.orange"
                mb={2}
              >
                Projeto Crierê
              </Heading>
              <Text fontSize={'sm'}>
                Educação e cultura para crianças e adolescentes. 
                Construindo sonhos através do conhecimento e da arte.
              </Text>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading fontSize={'lg'} fontWeight="bold" mb={2}>
              Navegação
            </Heading>
            <Link as={NextLink} href={'/'} _hover={{ color: 'brand.orange' }}>
              Início
            </Link>
            <Link as={NextLink} href={'/sobre'} _hover={{ color: 'brand.orange' }}>
              Sobre Nós
            </Link>
            <Link as={NextLink} href={'/trabalho'} _hover={{ color: 'brand.orange' }}>
              Nosso Trabalho
            </Link>
            <Link as={NextLink} href={'/impacto'} _hover={{ color: 'brand.orange' }}>
              Impacto Social
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading fontSize={'lg'} fontWeight="bold" mb={2}>
              Como Ajudar
            </Heading>
            <Link as={NextLink} href={'/voluntarios'} _hover={{ color: 'brand.orange' }}>
              Seja Voluntário
            </Link>
            <Link as={NextLink} href={'/doacoes'} _hover={{ color: 'brand.orange' }}>
              Faça uma Doação
            </Link>
            <Link as={NextLink} href={'/parceiros'} _hover={{ color: 'brand.orange' }}>
              Seja Parceiro
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading fontSize={'lg'} fontWeight="bold" mb={2}>
              Contato
            </Heading>
            <Stack spacing={2}>
              <Flex align="center">
                <Icon as={PhoneIcon} mr={2} color="brand.orange" />
                <Text fontSize="sm">(11) 99999-9999</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaWhatsapp} mr={2} color="brand.orange" />
                <Link 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  _hover={{ color: 'brand.orange' }}
                  fontSize="sm"
                >
                  WhatsApp
                </Link>
              </Flex>
              <Flex align="center">
                <Icon as={EmailIcon} mr={2} color="brand.orange" />
                <Link 
                  href="mailto:contato@projetocriere.org"
                  _hover={{ color: 'brand.orange' }}
                  fontSize="sm"
                >
                  contato@projetocriere.org
                </Link>
              </Flex>
              <Flex align="center">
                <Icon as={FaInstagram} mr={2} color="brand.orange" />
                <Link 
                  href="https://instagram.com/projeto.criere" 
                  target="_blank"
                  _hover={{ color: 'brand.orange' }}
                  fontSize="sm"
                >
                  @projeto.criere
                </Link>
              </Flex>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderColor="gray.600">
        <Container
          as={Stack}
          maxW={'1200px'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize="sm">
            © 2024 Projeto Crierê. Todos os direitos reservados.
          </Text>
          <Flex align="center" fontSize="sm">
            <Text mr={1}>Feito com</Text>
            <Icon as={FaHeart} color="brand.orange" mx={1} />
            <Text>para transformar vidas através da educação</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

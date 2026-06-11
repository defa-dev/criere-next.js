'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useProjectImages } from '@/hooks/useImages'
import Logo from './Logo'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const { getLogo } = useProjectImages()

  return (
    <Box>
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        minH={'60px'}
        align={'center'}
      >
        {/* Seção azul - 33vw */}
        <Box 
          bg="brand.blue" 
          w="33vw" 
          h="60px"
          display="flex"
          alignItems="center"
          px={4}
        >
          {/* Logo no lado azul */}
          <Logo 
            variant="white" 
            size="md" 
            color="white"
          />
        </Box>

        {/* Seção laranja - 67vw */}
        <Box 
          bg="brand.blue" 
          w="67vw" 
          h="60px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          px={4}
        >
          <Container maxW="1200px" w="full">
            <Flex align={'center'} justify={'flex-end'} h="60px">
              {/* Menu mobile */}
              <Flex
                display={{ base: 'flex', md: 'none' }}
                mr={4}
              >
                <IconButton
                  onClick={onToggle}
                  icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
                  color="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                />
              </Flex>

              {/* Menu desktop - alinhado à direita */}
              <Flex display={{ base: 'none', md: 'flex' }} align="center">
                <DesktopNav />
              </Flex>

              <Stack
                justify={'flex-end'}
                direction={'row'}
                spacing={6}
                ml={6}
              >
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  bg="white"
                  color="brand.blue"
                  _hover={{ bg: "whiteAlpha.900" }}
                  as={NextLink}
                  href="/voluntarios"
                >
                  Seja Voluntário
                </Button>
              </Stack>
            </Flex>
          </Container>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = 'white' // Links em branco
  const linkHoverColor = 'whiteAlpha.800' // Hover mais suave
  const popoverContentBgColor = 'white'

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Text
                as={NextLink}
                href={navItem.href ?? '#'}
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                cursor="pointer"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Text>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as={NextLink}
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      cursor="pointer"
      _hover={{ bg: 'brand.lightGray' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.orange' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'brand.orange'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack 
      bg="rgba(0, 0, 0, 0.95)" // Fundo escuro semi-transparente
      backdropFilter="blur(20px)" // Blur mais intenso
      p={4} 
      display={{ md: 'none' }} 
      position="fixed" 
      top="60px" 
      left={0} 
      right={0} 
      zIndex={999} 
      boxShadow="xl"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        mt={4}
        bg="white"
        color="brand.blue"
        _hover={{ bg: "whiteAlpha.900" }}
        as={NextLink}
        href="/voluntarios"
      >
        Seja Voluntário
      </Button>
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      {href && !children ? (
        <NextLink href={href} passHref>
          <Flex
            py={2}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Text fontWeight={600} color="white"> {/* Texto branco */}
              {label}
            </Text>
          </Flex>
        </NextLink>
      ) : (
        <Flex
          py={2}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text fontWeight={600} color="white"> {/* Texto branco */}
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              color="white" // Ícone branco
            />
          )}
        </Flex>
      )}

      {children && (
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor="whiteAlpha.300" // Borda mais suave
            align={'start'}
          >
            {children.map((child) => (
              child.href ? (
                <NextLink key={child.label} href={child.href} passHref>
                  <Text py={2} color="whiteAlpha.800">{child.label}</Text>
                </NextLink>
              ) : (
                <Text key={child.label} py={2} color="whiteAlpha.800">{child.label}</Text>
              )
            ))}
          </Stack>
        </Collapse>
      )}
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Sobre Nós',
    href: '/sobre',
  },
  {
    label: 'Nosso Trabalho',
    children: [
      {
        label: 'Apoio Pedagógico',
        subLabel: 'Reforço escolar individualizado',
        href: '/trabalho/apoio-pedagogico',
      },
      {
        label: 'Oficinas Culturais',
        subLabel: 'Capoeira, teatro, música e dança',
        href: '/trabalho/oficinas-culturais',
      },
      {
        label: 'Eventos Comemorativos',
        subLabel: 'Dia das Crianças, Natal Solidário',
        href: '/trabalho/eventos',
      },
    ],
  },
  {
    label: 'Impacto Social',
    href: '/impacto',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Depoimentos',
    href: '/depoimentos',
  },
  {
    label: 'Parceiros',
    href: '/parceiros',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
]

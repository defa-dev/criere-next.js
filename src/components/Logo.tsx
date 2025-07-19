'use client'

import { Box, Image, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useProjectImages } from '@/hooks/useImages'

interface LogoProps {
  variant?: 'main' | 'white' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  color?: string
}

export default function Logo({ 
  variant = 'main', 
  size = 'md', 
  showText = true,
  color = 'brand.orange'
}: LogoProps) {
  const { getLogo } = useProjectImages()

  const sizes = {
    sm: '60px',
    md: '80px',
    lg: '120px'
  }

  const textSizes = {
    sm: 'md',
    md: 'xl',
    lg: '2xl'
  }

  return (
    <Box
      as={NextLink}
      href="/"
      display="flex"
      alignItems="center"
      gap={3}
      _hover={{ opacity: 0.8 }}
      transition="opacity 0.2s"
      cursor="pointer"
    >
      <Image
        src={getLogo(variant)}
        alt="Projeto Crierê"
        height={sizes[size]}
        width="auto"
        fallback={
          showText ? (
            <Text
              fontFamily={'heading'}
              fontWeight="extrabold"
              fontSize={textSizes[size]}
              color={color}
            >
              Projeto Crierê
            </Text>
          ) : (
            <Box
              width={sizes[size]}
              height={sizes[size]}
              bg={color}
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="xs">
                PC
              </Text>
            </Box>
          )
        }
      />
    </Box>
  )
}

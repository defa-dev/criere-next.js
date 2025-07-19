import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      orange: '#FC9307',
      blue: '#003D79',
      white: '#FFFFFF',
      lightGray: '#F5F5F5',
      darkText: '#222222',
      grayText: '#666666',
      red: '#E84214',
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    extrabold: 800,
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.orange',
          color: 'white',
          borderRadius: '4px',
          _hover: {
            bg: '#e55a1f',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        secondary: {
          bg: 'white',
          color: 'brand.orange',
          border: '2px solid',
          borderColor: 'brand.orange',
          borderRadius: '4px',
          _hover: {
            bg: 'brand.orange',
            color: 'white',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
        },
        cta: {
          bgGradient: 'linear(to-r, brand.orange, brand.blue)',
          color: 'white',
          borderRadius: '4px',
          boxShadow: 'md',
          _hover: {
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'gray.200',
          p: 6,
          boxShadow: 'sm',
          _hover: {
            boxShadow: 'md',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.2s',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'extrabold',
        color: 'brand.blue',
      },
      sizes: {
        '4xl': {
          fontSize: ['3xl', '4xl', '5xl'],
          lineHeight: 1.1,
        },
        '3xl': {
          fontSize: ['2xl', '3xl', '4xl'],
          lineHeight: 1.2,
        },
        '2xl': {
          fontSize: ['xl', '2xl', '3xl'],
          lineHeight: 1.3,
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'body',
        fontSize: '16px',
        lineHeight: 1.5,
        color: 'brand.darkText',
      },
      variants: {
        secondary: {
          color: 'brand.grayText',
        },
      },
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  space: {
    section: {
      sm: 12,
      md: 16,
      lg: 20,
    },
  },
})

export default theme

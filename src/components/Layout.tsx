import { Box } from '@chakra-ui/react'
import Header from './Header'
import FooterNew from './FooterNew'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1" pt="60px">
        {children}
      </Box>
      <FooterNew />
    </Box>
  )
}

'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './_theme'

export function App({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={Theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

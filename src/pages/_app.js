import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider  resetCSS={true} theme={theme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

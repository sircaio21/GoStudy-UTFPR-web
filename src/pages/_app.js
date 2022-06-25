import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '../context/UserContext'
import {theme} from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider  resetCSS={true} theme={theme}> 
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp

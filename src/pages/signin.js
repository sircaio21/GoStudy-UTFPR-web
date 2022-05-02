import { Box, useColorMode } from "@chakra-ui/react"
export default function Home() {
    const { colorMode } = useColorMode();
    const brandColor = {light: 'brand.900',dark: 'brand.700'};

    return (
        <Box width={"100%"} height={'100vh'}  bgImage={'localhost:3000/vercel.svg'}>
                SIGNIN
        </Box>    
    )
  }
  
import { Box, useColorMode,Text,Image, Flex } from "@chakra-ui/react"
import { useState } from "react";
export default function Home() {
    const { colorMode } = useColorMode();
    const brandColor = {light: 'brand.900',dark: 'brand.700'};
    const [ isLogin, setIsLogin ] = useState(true);

    return (
        <Flex 
        justifyContent={'center'}
        alignItems="center"
        position={"relative"}
        width={ `100%`}
        h={`100vh`}
        bgPosition="center"
        bgRepeat="no-repeat"
        padding="0"
        bgSize="cover"
        bgImage={'/background.png'}>   
            <Box borderRadius={'10px'} bg={'white'} p={2}>
                <Flex>
                    <Text p={2}>
                        Login
                    </Text>
                    <Text p={2}> 
                        Cadastrar
                    </Text>
                    
                </Flex>
                { isLogin?
                    <Box>
                        LoginForm
                    </Box>
                    :
                    <Box>
                        CadastroForm
                    </Box>
                }
                
                

            </Box>


        </Flex>    
    )
  }
  
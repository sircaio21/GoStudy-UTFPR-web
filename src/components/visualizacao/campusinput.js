import { Box, Text, Grid, GridItem, Flex, Center, Button, flexbox } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Horario from "./tablevisul"




export default function Retornar({total}) {
    return(
        <Box borderRadius={'5px'} borderWidth={'1px'}
        borderColor={'#b2b2b2'} p={10} bgColor={'#FFFFFF'}
        maxWidth={'1150px'}  width={"100%"} maxHeight={'550px'} height={'100%'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <Box display={'flex'} alignItems={"center"} justifyContent = {"space-around"} >   
                
                    <Box margin={5} marginTop={-5}>
                        <Text>Id do Campus</Text>
                        <Input  type={"text"} borderColor={"gray.400"} />         
                    </Box>  

                    <Box margin={5} marginTop={-5} >
                        <Text>Nome do Campus</Text>
                        <Input size={"md"} type={"text"} borderColor={"gray.400"} />         
                    </Box>  
                    <Box marginTop={-5} marginLeft={50}   color={'#3584CC'}>
                        <Button  leftIcon={<AiOutlineSearch />} paddingLeft={7} paddingRight={8} marginRight={8} colorScheme='blue' variant='solid'>
                            Filtrar
                        </Button>
                    </Box> 
                    <Box marginTop={-5} marginLeft={5}  color={'#3584CC'}>
                        <Button  leftIcon={<IoIosAddCircleOutline />}  colorScheme='blue' variant='solid'>
                            Adicionar
                        </Button>
                    </Box> 
            </Box> 
            <Horario/>
        </Box>
    )
}
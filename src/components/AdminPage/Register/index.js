import { Box, Flex, Text } from "@chakra-ui/react"

export default ()=>{
    
    
    return(
        <Flex p={3} flexDir={'column'} maxWidth={'400px'}  bg={'yellow'} height={'90%'}>
            <Text fontSize={'24px'} fontWeight='bold'>
                Cadastros
            </Text>
            <Flex 
            justifyContent={'center'}
            fontSize={'22'}
            p={2} 
            bg={"#E6E6E6"} 
            width={'80%'}>
                <Text>Instituição</Text>
            </Flex>
            <Flex 
            justifyContent={'center'}
            fontSize={'22'}
            p={2} 
            bg={"#E6E6E6"} 
            width={'80%'}>
                <Text>Horário</Text>
            </Flex>
            <Flex 
            justifyContent={'center'}
            fontSize={'22'}
            p={2} 
            bg={"#E6E6E6"} 
            width={'80%'}>
                <Text>Salas</Text>
            </Flex>
            <Flex 
            justifyContent={'center'}
            fontSize={'22'}
            p={2} 
            bg={"#E6E6E6"} 
            width={'80%'}>
                <Text>Usuários</Text>
            </Flex>  
            <Flex 
            justifyContent={'center'}
            fontSize={'22'}
            p={2} 
            bg={"#E6E6E6"} 
            width={'80%'}>
                <Text>Reservas</Text>
            </Flex>   
        </Flex>
    )

}
import { Box, Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
export default ()=>{
    const router = useRouter();
    
    return(
        <Flex p={4} flexDir={'column'} maxWidth={'400px'} minWidth={'350px'} 
        bg={'#FFFFFF'} borderRadius={'5px'} borderColor={"rgba(0,0,0,0.1)"} borderWidth='1px'
        filter={'drop-shadow(0px 4px 4px  rgba(0, 0, 0, 0.5'} 
        
        >
            <Text fontSize={'24px'} fontWeight='bold' >
                Cadastros
            </Text>
            <Flex mt={2} flexDir={'column'} alignItems={'center'} width='100%'>
                <Flex 
                justifyContent={'center'}
                fontSize={'22'}
                p={2} 
                bg={"#E6E6E6"} 
                width={'80%'}
                mt={2}
                mb={2}
                cursor={'pointer'}
                onClick={()=>router.push('/admin/cadastroinstituicao')}
                >
                    <Text>Instituição</Text>
                </Flex>

                <Flex 
                justifyContent={'center'}
                fontSize={'22'}
                p={2} 
                bg={"#E6E6E6"} 
                width={'80%'}
                mt={2}
                mb={2}>
                    <Text>Horários</Text>
                </Flex>

                <Flex 
                justifyContent={'center'}
                fontSize={'22'}
                p={2} 
                bg={"#E6E6E6"} 
                width={'80%'}
                mt={2}
                mb={2}>
                    <Text>Salas</Text>
                </Flex>
                <Flex 
                justifyContent={'center'}
                fontSize={'22'}
                p={2} 
                bg={"#E6E6E6"} 
                width={'80%'}
                mt={2}
                mb={2}
                cursor={'pointer'}
                onClick={()=>router.push('/admin/cadastrousuarios')}
                >
                    <Text>Usuários</Text>
                </Flex>  
                <Flex 
                justifyContent={'center'}
                fontSize={'22'}
                p={2} 
                bg={"#E6E6E6"} 
                width={'80%'}
                mt={2}
                mb={2}>
                    <Text>Reservas</Text>
                </Flex>   
            </Flex>
            
        </Flex>
    )

}
import { Box, Text, Grid, GridItem, Flex, Center, Button, flexbox } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'



export default function Retornar() {
    return(
        <Box borderRadius={'5px'} borderWidth={'1px'}
        borderColor={'#b2b2b2'} p={10} bgColor={'#FFFFFF'}
        maxWidth={'1150px'}  width={"100%"} maxHeight={'350px'} height={'100%'} display={'flex'} alignItems={'center'} alignContent={'center'}>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} >   
                <GridItem>
                    <Box alignItems={'center'} >
                    <Text>Nome da instituição</Text>
                    <Input size='md' />         
                    </Box>  
                </GridItem>
                <GridItem >
                    <Box alignItems={'center'} >
                    <Text>Cidade</Text>
                    <Input size='md' />         
                    </Box>  
                </GridItem>
                <GridItem   >
                    <Box alignItems={'center'} >
                    <Text>Telefone</Text>
                    <Input size='md' />         
                    </Box>  
                </GridItem>
                
                <GridItem  >
                    <Box alignItems={'center'} >
                    <Text>Horário de abertura</Text>
                    <Input size='md' />         
                    </Box>  
                </GridItem>
                <GridItem  >
                    <Box alignItems={'center'} >
                    <Text>Horário de fechamento</Text>
                    <Input size='md' />         
                    </Box>  
                </GridItem>
            </Grid> 
        </Box>
    )
}
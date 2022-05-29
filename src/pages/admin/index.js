import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Header from '../../components/Header'
import Visualization from "../../components/AdminPage/Visualization"
import Register from "../../components/AdminPage/Register"
import ExitBtnPanel from "../../components/AdminPage/ExitBtnPanel"
export default function Admin() {
    return (
        <Box width={"100%"} height={"100vh"}>
            <Header/>
            <Flex justifyContent={'center'}
            width={'100%'} 
            height={'max-content'}
            >
                <Box width={'50%'} >
                    <Register/>
                </Box>
                <Box width={'50%'}>
                    <Visualization/> 
                </Box>
            </Flex>
            <Flex bg={'#696'} justifyContent={'center'} width={'100%'}>
                <ExitBtnPanel/>
            </Flex>
        </Box>    
    )
  }
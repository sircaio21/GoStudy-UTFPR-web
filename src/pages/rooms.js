import { Box, Flex,Grid,GridItem,Text, Button } from "@chakra-ui/react"
import Header from '../components/MainPage/Header'
import Salas from "../components/RoomPage/Salas/index"
import Retornar from "../components/RoomPage/Retornar"
import Informacoes from "../components/RoomPage/informacoes"
export default function Home() {
    return (
        <Box bgColor={"#E5E5E5"} width={'100%'} height={'100vh'}>
          <Header/>
          <Box p={'4px'} display = {"flex"} alignItems={"center"} alignContent={'center'} justifyContent = {"center"} >
            <Retornar/>
          </Box>
          <Box p={'4px'} marginTop={'-5'} bgColor={"#E5E5E5"} display = {"flex"} alignItems={"center"} justifyContent = {"center"}>     
            <Salas/>
           
          </Box>
        </Box>   
    )
  }
  
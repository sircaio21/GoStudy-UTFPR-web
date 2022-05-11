import { Box, Text, Grid, GridItem, Flex, Center, Button, flexbox } from "@chakra-ui/react"

import Salas from "../Salas/boxsalas"
import DropDown from "../Salas/dropdown"
import {Spacer } from '@chakra-ui/react'
export default function Retornar() {

    return(
        <Box borderRadius={'5px'} borderWidth={'1px'}
        borderColor={'#b2b2b2'} p={6} bgColor={'#FFFFFF'}
        maxWidth={'1150px'} marginTop='30px' width={"100%"} maxHeight={'650px'} height={'100%'} display={'flex'}>
            <Salas/>
            <Spacer />       
            <Box>
                <DropDown/>
             </Box> 
            <Spacer />
        </Box>
    )
}
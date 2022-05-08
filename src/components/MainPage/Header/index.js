import { Box, Text,Flex, Button  } from "@chakra-ui/react"
import { router } from 'next'
import { useState } from "react";

export default function CadastroForm() {
   
    return (
        <Flex alignItems={'center'} justifyContent={'space-around'}  height={'80px'} bgColor={'#6BB6FA'} >
          
          <Flex height={'60px'}>
            <img  src='/foto-perfil.png'/>
            <Flex marginLeft={'10px'} flexDirection={'column'} justifyContent="center">
              <Text  fontSize={'18px'} color={'white'}>
                Nome do Usuario
              </Text>
              <Text fontSize={'14px'} color={'white'}>
                RA: 1234567
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <img src='/logo-utfpr.png'/>
          </Flex>
        </Flex> 
    )


}
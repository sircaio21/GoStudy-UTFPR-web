import { Box, Text, Grid, GridItem, Flex, Center, Button } from "@chakra-ui/react"
import { BsCheckCircle, BsXCircle} from "react-icons/bs";
import { MdCheckCircleOutline } from "react-icons/md";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'





const campostable = [
    {
      id: 1,
      campus: "UTFPR-TO",
      cidade: "Toledo",
      telefone:"(45) 11234-5678",
      abertura:"6:55",
      fechamento: "19:00",

    },  
  ]


  export default function tablevisul(){
    return(
        <Box borderRadius={'5px'} >
        <TableContainer>
        <Table variant='unstyled'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Id</Th>
              <Th>Campus</Th>
              <Th>Cidade</Th>
              <Th>Telefone</Th>
              <Th>abertura</Th>
              <Th>fechamento</Th>
              <Th >Acão</Th>
            </Tr>
          </Thead>
          <Tbody>
          </Tbody>
          <Tfoot>
          </Tfoot>
        </Table>
      </TableContainer>
            
    </Box>
    )
}
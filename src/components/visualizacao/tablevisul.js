import { Box, Text, Grid, GridItem, Flex, Center, Button } from "@chakra-ui/react"
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
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

    {
        id: 2,
        campus: "UTFPR-CM",
        cidade: "Campo Mourão",
        telefone:"(45) 11234-5678",
        abertura:"6:55",
        fechamento: "19:00",
      },  
  ]

  function rowstable(id,campus,cidade,telefone,abertura,fechamento ) {

    return(
        <Tr>
        <Td isNumeric>{id}</Td>
        <Td>{campus}</Td>
        <Td>{cidade}</Td>
        <Td>{telefone}</Td>
        <Td>{abertura}</Td>
        <Td>{fechamento}</Td>
        <td>
            <Button variant='ghost' colorScheme='none' border={'Background'} alignContent={'center'} justifyContent={'center'}  marginRight={1} padding={0}>{<BsFillPencilFill />}</Button>
            <Button variant='ghost' colorScheme='none' padding={-1}>{<BsFillTrashFill />}</Button>
        </td>
        </Tr>
        
    )
}


  export default function tablevisul(){
    return(
        <Box borderRadius={'5px'} >
        <TableContainer>
        <Table variant='unstyled'>
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
          {campostable.map((row) => ( 
                rowstable(row.id, row.campus, row.cidade, row.telefone, row.abertura,row.fechamento)           
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
    )
}
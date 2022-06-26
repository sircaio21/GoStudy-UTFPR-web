import { Box, Text, Grid, GridItem, Flex, Center, Button, list } from "@chakra-ui/react"
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
import React, { useState } from "react";
import Pagination from '../../Pagination'
const max_itens = 3;

export default function ContainerUser({userList}){
    const [offset, setoffset] = useState(0);
    
    return(
        <Box borderRadius={'5px'} >
            <TableContainer>
            <Table variant='unstyled'>
            <Thead>
                <Tr>
                <Th isNumeric backgroundColor={"#DEEEFF"}>Id</Th>
                <Th backgroundColor={"#DEEEFF"}>Campus</Th>
                <Th backgroundColor={"#DEEEFF"}>Cidade</Th>
                <Th backgroundColor={"#DEEEFF"}>Telefone</Th>
                <Th backgroundColor={"#DEEEFF"}>abertura</Th>
                <Th backgroundColor={"#DEEEFF"}>fechamento</Th>
                <Th backgroundColor={"#DEEEFF"} >Acão</Th>
                </Tr>
            </Thead>
            <Tbody>
            {userList?.slice(offset,offset+5).map((user) => ( 
                        <Tr>
                            <Td isNumeric>{user.id}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.city}</Td>
                            <Td>{user.telephone}</Td>
                            <Td>{user.openingTime}</Td>
                            <Td>{user.closingTime}</Td>
                            <td>
                                <Button variant='ghost' colorScheme='none' border={'Background'} alignContent={'center'} justifyContent={'center'}  marginRight={1} padding={0}>{<BsFillPencilFill />}</Button>
                                <Button variant='ghost' colorScheme='none' padding={-1}>{<BsFillTrashFill />}</Button>
                            </td>
                        </Tr> 
                ))}
            </Tbody>
            </Table>
        </TableContainer>
        <Pagination 
            limit={5} 
            total={userList?.length} 
            offset={offset}
            setoffset={setoffset}
        />
    </Box>
    )
}
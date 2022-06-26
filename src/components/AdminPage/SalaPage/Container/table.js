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
const max_left = (max_itens -1)/2;
export default function ContainerCampus({salaList}){
    const [offset, setoffset] = useState(0);
    return(
        <Box borderRadius={'5px'} >
            <TableContainer>
            <Table variant='unstyled'>
            <Thead>
                <Tr>
                <Th isNumeric backgroundColor={"#DEEEFF"}>Id</Th>
                <Th backgroundColor={"#DEEEFF"}>Câmpus</Th>
                <Th backgroundColor={"#DEEEFF"}>Número</Th>
                <Th backgroundColor={"#DEEEFF"}>Ações</Th>
                </Tr>
            </Thead>
            <Tbody>
            {salaList?.slice(offset,offset+5).map((sala) => ( 
                        <Tr>
                            <Td isNumeric>{sala.id}</Td>
                            <Td>{sala.fk_id_institute}</Td>
                            <Td>{sala.number}</Td>
                            <td>
                                <Button variant='ghost' colorScheme='none' 
                                border={'Background'} alignContent={'center'} 
                                justifyContent={'center'}  marginRight={1} 
                                padding={0}>
                                    {<BsFillPencilFill />}
                                </Button>
                                <Button variant='ghost' colorScheme='none' padding={-1}>
                                    {<BsFillTrashFill />}
                                </Button>
                            </td>
                        </Tr> 
                ))}
            </Tbody>
            </Table>
        </TableContainer>
        <Pagination 
            limit={5} 
            total={salaList?.length} 
            offset={offset}
            setoffset={setoffset}
        />
    </Box>
    )
}
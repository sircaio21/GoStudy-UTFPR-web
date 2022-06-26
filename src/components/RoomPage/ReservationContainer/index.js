import { Box, Text, Grid, GridItem, Flex, Center, Button, flexbox, Input } from "@chakra-ui/react"

import BoxSalas from "./boxsalas"
import DropDown from "./dropdown"
import Horarios from "./horarios"
import {Spacer } from '@chakra-ui/react'
import { BsCheckCircle, BsXCircle} from "react-icons/bs";
import useReservation from '../../../hooks/useReservation'
import { useEffect, useState } from "react"
import getAllRooms from "../../../services/room/getAllRooms"
import useUser from "../../../hooks/useUser"
export default function ReservationContainer() {
    const { user } = useUser();
    const {reservations, filteredReservations,getRoomsReservations} = useReservation();
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom ] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    
    useEffect(
        ()=>{
            let date = new Date;
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            (async()=>{
              if(user.token){
                const response = await getAllRooms({token: user?.token});
                console.log(response)
                if(response.status == "success"){
                  setRooms(response.data);
                  setSelectedRoom(response.data[0].id)
                  setSelectedDate(`${year}-${month}-${day}`)
                }
              }
            })()
        },[user]
    )

    useEffect(
        ()=>{
            if(selectedRoom && selectedDate){
               let reservationRoom = getRoomsReservations({idRoom:selectedRoom,date:selectedDate});
               
            }
        },[selectedRoom,selectedDate ]
    )
    

    return(
        <Box borderRadius={'5px'} borderWidth={'1px'}
        borderColor={'#b2b2b2'} p={6} bgColor={'#FFFFFF'}
        maxWidth={'1150px'} marginTop='0px' width={"100%"} maxHeight={'350px'} height={'100%'} display={'flex'}>
            
            <BoxSalas salas={rooms} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            <Spacer />       
            <Box alignItems={'center'} alignContent={'center'} >
                <Flex alignItems={'center'}>
                    <Text fontSize={'22px'} fontWeight='700' mr={'20px'}> Data Reserva: </Text>
                    <Input value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)}
                    type='date' width={'150px'} />
                </Flex>
                <Flex marginLeft={'200px'}>
                    <Box p={5} display={'flex'} alignItems={'center'}>
                        <BsCheckCircle color="green" />
                        <Text marginLeft={3}>Disponivel</Text>
                    </Box>
                    <Box p={5} display={'flex'} alignItems={'center'}>
                        <BsXCircle color="red" fontSize="large" />
                        <Text marginLeft={3}>Reservado</Text>
                    </Box>
                </Flex>
                <Box borderRadius={'5px'} 
                    p={6} bgColor={'#FFFFFF'}
                    maxWidth={'1200px'} width={"100%"}>
                    <Grid templateColumns='repeat(6, 1fr)' rowGap={10} columnGap={3}>
                    {/* {Horarios.map((horario, index) => (
                        <GridItem>
                            { horario.isReservado?
                                reservado(horario)
                                :
                                livre(horario)
                            }
                            
                        </GridItem>
                    ))} */}
                    </Grid>
                </Box>
             </Box> 
            <Spacer />
        </Box>
    )
}
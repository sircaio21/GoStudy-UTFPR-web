
import { createContext, useState, useEffect } from "react";
import getAllReservation from "../services/reservation/getAllReservation";
const ReservationContext = createContext();
import useUser from "../hooks/useUser";
export function ReservationProvider({children}){
    const {user} = useUser();
    const [reservations, setReservations] = useState([]);
    
    useEffect(
        ()=>{
            (async ()=>{
                if(user.token){
                    const response = await getAllReservation({token: user.token});
                    if(response.status == "success"){
                        console.log(response.data)
                        setReservations(response.data)
                    }
                }
            })()
        },[user]
    )

    return <ReservationContext.Provider
     value={{
        reservations, setReservations
     }}>
       {children} 
    </ReservationContext.Provider>
}

export const ReservationConsumer = ReservationContext.Consumer;

export default ReservationContext;

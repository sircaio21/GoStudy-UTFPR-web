import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Header from '../../components/Header'
import Visualization from "../../components/AdminPage/Visualization"
import Register from "../../components/AdminPage/Register"
import ExitBtnPanel from "../../components/AdminPage/ExitBtnPanel"
export default function Admin() {
    return (
        <Box width={"100%"} height={"100vh"}>
            <Header/>
            <Grid
            bg={'#696'} 
            h='90vh'
                templateColumns='repeat(2, 1fr)'
                templateRows={'repeat(3, 1fr)'}
                gap={4}
            >
                <GridItem colSpan={1} rowSpan={3} >
                    <Register/>
                </GridItem>
                <GridItem colSpan={1} rowSpan={3} >
                    <Visualization/> 
                </GridItem>
                <GridItem bg={'black'} colSpan={2} rowSpan={1}>
                    <ExitBtnPanel/>
                </GridItem>
            </Grid>
            
        </Box>    
    )
  }
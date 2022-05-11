import { Select } from '@chakra-ui/react'



export default function DropDown() {
    return(
        
            <Select  maxWidth={"1000px"} width={"350px"} height={'50px'} marginTop={'20px'} marginLeft={'-10'} placeholder='Segunda-Feira' bg={'#EEEDEA'}>
                <option value='Terça-Feira' size='lg'>Terça-Feira</option>
                <option value='Quarta-Feira' size='lg'>Quarta-Feira</option>
                <option value='Quinta-Feira' size='lg'>Quinta-Feira</option>
                <option value='Sexta-Feira' size='lg'>Sexta-Feira</option>
            </Select>
        
    )
}
import Input from "./NavBar-Menu";
import Funcion from "./NavBar-funcion";
import Box from '@mui/material/Box';
import Busqueda from "./NavBar-Search";

export default function NavBar(){
  return (
    <Box>
    <Input/>
    <Funcion/>
    <Busqueda/>
    </Box>
  )
}
import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import stylesHero from '../styles/Section1.module.css';
import Galeria from './Galeria';


export default function Hero() {
  
  return (
    
    <Box sx={{display: 'flex',flexDirection: 'column','& > *': {m: 1, },}}>
      
  <div class="container">
    <img src="https://media.vandalsports.com/i/640x360/5-2022/202251816546_1.jpg" alt="Imagen"></img>
  <div>
    <h1> La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos</h1>
    <h2>serie Tv<MovieFilterOutlinedIcon/> </h2>
  </div>
</div>
    </Box>
  );
}

 
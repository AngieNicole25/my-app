import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import stylesSection1 from '../styles/Section1.module.css';


export default function Hero() {
  return (
    
    <Box sx={{display: 'flex',flexDirection: 'column','& > *': {m: 1, },}}
    >
        <h1>AniMan 😉</h1>
        <h2>Anime & Mangas <MovieFilterOutlinedIcon/> </h2>
        <h3>Variedad de contenido</h3>
    <ButtonGroup variant="outlined" aria-label="outlined button group">       
      <Button className={stylesSection1.Button}>Todo</Button>
      <Button className={stylesSection1.Button}>Animes</Button>
      <Button className={stylesSection1.Button}>Mangas</Button>
      </ButtonGroup>
    </Box>
  );
}
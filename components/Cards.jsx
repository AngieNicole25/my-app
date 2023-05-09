import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import stylesCard from '../styles/Card.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { useState } from 'react'

export default function Cards({titulo, img, cambiarFavoritos}) {
 const [liked, setLiked] =useState(false)

  return (
    <Card sx={{ width: 310, height: 520  }} cols={6} className={stylesCard.Card}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="400"
          img src={img}
        />
        <CardContent  >
          <h5>{titulo}</h5>
          <button 
          className={"button " + (liked && "liked")}  
          onClick={() => setLiked (prev => !prev)}>
          <FavoriteIcon/></button>
          <button 
          className={"buttonP " + (liked && "liked")} 
          onClick={() => setLiked (prev => {
            cambiarFavoritos(!prev)
            return !prev
          })}>
          <TurnedInIcon/></button>
        </CardContent>
      </CardActionArea> 
    </Card>
  );
}
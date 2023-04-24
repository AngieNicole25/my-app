import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://upload.wikimedia.org/wikipedia/en/3/31/Theuntamed.jpg"
          alt="The Untamed"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           The Untamed
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card>
  );
}
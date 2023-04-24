import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import { ShareFace, ShareTelegram } from "./Share";
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import stylesFooter from '../styles/Footer.module.css';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ height: 100 }} className={stylesFooter.box} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="" icon={<ShareFace/>} />
        <BottomNavigationAction label="" icon={ <ShareTelegram/>} />
        <BottomNavigationAction label="Localización" icon={<AddLocationAltSharpIcon/>} />
        <BottomNavigationAction label="Galeria" icon={<AddPhotoAlternateSharpIcon/>} />
        
      </BottomNavigation>
    </Box>
  );
}
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Galeria() {
  return (
    <ImageList sx={{ width: 680, height: 440  }} cols={6}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.mydramalist.com/BPjw7_4c.jpg?v=1',
    title: 'Between Us ',
  },
  {
    img: 'https://i.mydramalist.com/d0rgJK_4c.jpg?v=1',
    title: 'Future',
  },
  {
    img: 'https://i.mydramalist.com/wPbOb_4c.jpg?v=1',
    title: 'Big Dragon',
  },
  {
    img: 'https://i.mydramalist.com/02EmN_4c.jpg?v=1',
    title: 'I Will Knock You',
  },
  {
    img: 'https://i.mydramalist.com/ZpV7J_4c.jpg?v=1',
    title: 'Hard Love Mission',
  },
  {
    img: 'https://i.mydramalist.com/0WEWE_4c.jpg?v=1',
    title: 'Ghost Host, Ghost House',
  },
  {
    img: 'https://i.mydramalist.com/0kg16_4c.jpg?v=1',
    title: 'My-Scholl-President',
  },
  {
    img: 'https://i.mydramalist.com/1wwoB6_4c.jpg?v=1',
    title: 'Love Syndrome III',
  },
  {
    img: 'https://i.mydramalist.com/jKjjO_4c.jpg?v=1',
    title: 'Ai Long Nhai ',
  },
  {
    img: 'https://i.mydramalist.com/26Nnk_4c.jpg?v=1',
    title: 'The Eclipse',
  },
  {
    img: 'https://i.mydramalist.com/QZ6eY_4c.jpg?v=1',
    title: '21 Days Theory ',
  },
  {
    img: 'https://i.mydramalist.com/122nd_4c.jpg?v=1',
    title: 'My Only 12%',
  },
];
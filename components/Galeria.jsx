import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Galeria() {
  return (
    <ImageList sx={{ width: 680, height: 540  }} >
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
    img: 'https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634118017_674906_1634118171_noticia_normal.jpg',
    title: 'The Walking Dead',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzKSo-6aUbTTIhwgjoDv9g2OSfdRNiJRaw7rTWuSpyVL1Z9KSlUXrqUedoPyMv5vy9is&usqp=CAU',
    title: 'The Walking Dead',
  },
  {
    img: 'https://i.blogs.es/5eb3fe/the-walking-dead-poster/1366_2000.jpeg',
    title: 'The Walking Dead',
  },
  {
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/SSBH6YNRMFGS7JX2AURFNEOHRY.jpg',
    title: 'The Walking Dead',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGduEHXzEKpeYfxyS4QQ-Q0aWZuBZFfkYpK_OPbgeu9WVpv1gnSiOsubVp7sAy8QrWOhY&usqp=CAU',
    title: 'The Walking Dead',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRkgLv6do3QNGBBO8XRLqB6FViu7qTiIfOqYgUiyLCIKxkS5uJ_I93i_ohSLb2-dMGhs&usqp=CAU',
    title: 'The Walking Dead',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiW4ApGfVc9LtD3jueqUj9TGLhVSv6586NEBFivLzBXOiaRlyBQXdGXBvCXcucSLhVUY&usqp=CAU',
    title: 'The Walking Dead',
  },
  {
    img: 'https://smoda.elpais.com/wp-content/uploads/2019/02/the-walking-dead-00.jpg',
    title: 'The Walking Dead',
  },
  {
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/HEITODJ3NBFZDHKI5MINOKHK7A.jpg',
    title: 'The Walking Dead',
  },
  {
    img: 'https://movieplayer.net-cdn.it/t/images/2022/11/21/the-walking-dead-recensione-finale-stagione-serie-tv-disney-plus_jpg_1280x720_crop_q85.jpg',
    title: 'The Walking Dead',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbS-TBKzaakTIDoF0J9gbAU1cBTnRpP2o4qvwpculXizTeb8elLos_QDmhmjoibBcvxME&usqp=CAU',
    title: 'The Walking Dead',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9OB7qUed6fgFy24kAiB6vZFNP1nYg1YYND6ZagVpa3OJY1elUCJizdTIngyhwwevhlQ&usqp=CAU',
    title: 'The Walking Dead',
  },
];
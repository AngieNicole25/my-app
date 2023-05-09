import { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Cards from '@/components/Cards'
import Galeria from '@/components/Galeria'
import Footer from '@/components/Footer'
import cardList from '../public/lista.json'
import stylesCard from '../styles/Card.module.css'
import stylesNavbar from '../styles/Navbar.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [characters, setCharacters] = useState ([])
  
  const [favoritos, setFavoritos] = useState(0)
  useEffect(() => {
    alert("Elementos agregados: " + favoritos)
  }, [favoritos])

  useEffect(() => {
    async function getApi() {
      const res = await axios.get("https://api.myanimelist.net/v2")
      console.log(res.data.results)
      setCharacters(res.data.results)
    }
    getApi()
  },[])

  function changeElements(toDo) {
    toDo 
    ? setFavoritos(prev => prev + 1)
    : setFavoritos(prev => prev - 1)
  }
  return (
    <>
    <Head>
      <title>My-App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>

      <header className={stylesNavbar.Navbar}> <NavBar/> </header>

      <section> <Hero/> <h4>favoritos {favoritos}</h4> </section>
    

      {
      cardList.map(card => {
        return <Cards className={stylesCard.Card} titulo={card.title} img={card.imageURL} cambiarFavoritos={changeElements}/>
      })
      }


    <section> <Galeria/> </section> 
    
    <Footer/>
    </main>
    </>
  )

  }
  

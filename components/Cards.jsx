import styles from '@/styles/Card.module.css'
import Link from "next/link";

const Cards = ({id, name, image}) => {

      return <div className={styles.Card}>
        <img src={image} className={styles.image}/>
        <h3>{name}</h3>
         <Link href={`/Characters/${id}`} className={styles.button}>Iniciar</Link>  
  
  </div>
} 
export default Cards



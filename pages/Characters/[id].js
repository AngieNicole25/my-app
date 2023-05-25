import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios'


export default function CharacterDescription() {
    const {id} = useRouter().query
    const [Characters, setCharacters] = useState(null)

    useEffect(() => {
        async function getApi() {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log(res.data)
            setCharacters(res.data)
        }
        if (id != undefined) getApi()
    }, [id])

    return <div>
        {
            Characters
                ? <>
                    <img src={Characters.image} />
                    <p> Name: {Characters.name}</p>
                    <p> Gender: {Characters.gender}</p>
                    <p> Status: {Characters.status}</p>
                    <p> Species: {Characters.species}</p>
                    <p> Created: {Characters.created}</p>
                    {Characters.episode.map(e => <p>{e}</p>)}
                </>
                : <></>
        }
    </div>
}
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"

export default function SingleCard() {

    const { id } = useParams()

    const [card, setCard] = useState({})

    function fetchCard() {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then((res) => setCard(res.data))
        .catch((err) => console.error(`error: ${err}`))
    }

    useEffect(fetchCard, [])

    return (
        <>
          <Card 
           title={card.title}
           director={card.director}
           genre={card.genre}
           year={card.release_year}
          />
        </>
    )
}
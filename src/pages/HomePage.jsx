import axios from "axios"
import { useState, useEffect } from "react"
// Import markup of single card
import Card from "../components/Card"

export default function HomePage() {

    {/* State for all movies */}
    const [todos, setTodos] = useState([])

    {/* Function for call movies */}
    function fetchTodos() {
        axios.get('http://localhost:3000/movies')
          .then((res) => setTodos(res.data))
          .catch((err) => console.error(`error: ${err}`))
    }
    console.log(todos)

    {/* Load at open of the page the cards */}
    useEffect(fetchTodos, [])

    return (
        <>
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                {
                    todos.map((thisTodo) => (
                        <Card 
                          key={thisTodo.id}
                          id={thisTodo.id}
                          title={thisTodo.title}
                          director={thisTodo.director}
                          genre={thisTodo.genre}
                          year={thisTodo.release_year}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}
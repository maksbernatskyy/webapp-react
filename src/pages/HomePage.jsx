import axios from "axios";
import { useState, useEffect } from "react";
// Import markup of single card
import Card from "../components/Card";
import { useLoading } from "../../contexts/GlobalContext";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

export default function HomePage() {
  {
    /* State for all movies */
  }
  const [todos, setTodos] = useState([]);

  const { loading, setLoading } = useLoading();

  {
    /* Function for call movies */
  }
  function fetchTodos() {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(`error: ${err}`))
      .finally(() => setLoading(false));
  }
  console.log(todos);

  {
    /* Load at open of the page the cards */
  }
  useEffect(fetchTodos, []);

  return (
    <>
      <div className="container py-5">
        {loading ? (
          // Default values shown
          <LineSpinner size="40" stroke="3" speed="1" color="black" />
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            {todos.map((thisTodo) => (
              <Card
                key={thisTodo.id}
                id={thisTodo.id}
                title={thisTodo.title}
                director={thisTodo.director}
                genre={thisTodo.genre}
                year={thisTodo.release_year}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

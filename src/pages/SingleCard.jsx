import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Review from "../components/Review";

export default function SingleCard() {
  const { id } = useParams();

  const [card, setCard] = useState({});
  const [reviews, setReviews] = useState([]);

  function fetchCard() {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setCard(res.data))
      .catch((err) => console.error(`error: ${err}`));

    axios
      .get(`http://localhost:3000/movies/${id}/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(`error: ${err}`));
  }

  useEffect(fetchCard, []);

  return (
    <>
      <div className="container">
        <div className="w-25 mt-3 ">
          <Card
            title={card.title}
            director={card.director}
            genre={card.genre}
            year={card.release_year}
          />
        </div>
        <div>
          <h3 className="my-3">Reviews</h3>
          {reviews.map((thisReview) => (
            <Review
              key={thisReview.id}
              name={thisReview.name}
              vote={thisReview.vote}
              text={thisReview.text}
              created_at={thisReview.created_at}
              updated_at={thisReview.updated_at}
            />
          ))}
        </div>
      </div>
    </>
  );
}

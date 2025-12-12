import { Link } from "react-router-dom";

export default function Card({title, director, genre, year, id}) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="bg-body-secondary p-5">
            <h6>{title}</h6>
          </div>

          <div className="card-body">
            <ul className="list-unstyled">
                <li>
                    <h5>{title}</h5>
                </li>
                <li>
                    <span><strong>{director}</strong></span>
                </li>
                <li>
                    <span><strong>{genre}</strong></span>
                </li>
                <li>
                    <span><strong>{year}</strong></span>
                </li>
                <li>
                    <Link className="btn btn-primary" to={`/${id}`}>Go to details</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

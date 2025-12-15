export default function Review({ name, vote, text, created_at, updated_at }) {
  return (
    <>
      <div className="card p-3 w-50">
        <ul className="list-unstyled">
          <li>
            <span>{name}</span>
          </li>
          <li>
            <span>{vote}</span>
          </li>
          <li>
            <p>{text}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

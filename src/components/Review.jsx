export default function Review({name, vote, text, created_at, updated_at}) {
    return (
        <>
         <ul>
            <li>
                <span>{name}</span>
            </li>
            <li>
                <span>{vote}</span>
            </li>
            <li>
                <p>{text}</p>
            </li>
            <li>
                <span>{created_at}</span>
            </li>
            <li>
                <span>{updated_at}</span>
            </li>
         </ul>
        </>
    )
}
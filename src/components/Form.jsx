export default function Form({name, vote, text, path, handleFunction}) {
    return (
        <>
          <form action={path} method="POST">
             <input type="text" name="name" value={name} placeholder="Your name" onChange={handleFunction} />
             <input type="number" name="vote" value={vote} placeholder="Insert the vote" onChange={handleFunction} />
             <input type="text" name="text" value={text} placeholder="Text" onChange={handleFunction} />
             <button className="btn btn-primary" type="submit">Add comment</button>
          </form>
        </>
    )
}
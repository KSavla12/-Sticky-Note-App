
function Note(props) {


  return (
    <div className="note">
      <h1>{props.text.title}</h1>
      <p>{props.text.content}</p>
      <button
      onClick={() => {
        props.delete(props.id)
      }}
      >DELETE</button>
    </div>
  );
}

export default Note;

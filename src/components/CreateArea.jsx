import { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
  })

  function handleNote(event) {
    const {value, name} = event.target
    
    setNewNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
    
  }

  function submitNote(event) {
    props.addNote(newNote)
    
    event.preventDefault()

    setNewNote({
      title: '',
      content: '',
    })
  }

  return (
    <div>
      <form>
        <input 
        name="title" 
        placeholder="Title" 
        onChange={handleNote}
        value={newNote.title}
        />
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        onChange={handleNote}
        value={newNote.content}
        />
        <button
        onClick={submitNote}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

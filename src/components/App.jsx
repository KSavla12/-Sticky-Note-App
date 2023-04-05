import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteArray, setNoteArray] = useState([])

  function handleNoteArray(newNote) {
    setNoteArray(preValue => {
      return [...preValue, newNote] 
    });
    console.log(noteArray)
  }

  function DeleteNote(id) {
    setNoteArray(preValue => {
      return preValue.filter((noteArray, index) => {
        return index !== id 
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleNoteArray}/>

      {noteArray.map((notes, index) => (
        <Note
          key={index}
          id={index}
          text={notes}
          delete={DeleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

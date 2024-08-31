import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dkeeper_backend} from "../../../declarations/dkeeper_backend";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      dkeeper_backend.createNote(note.title, note.content);
      return [note, ...prevNotes];
    });
  }

  useEffect(() => {
    console.log("Triggered");
    fetchData();
  }, []);
  

   async function fetchData(){
      const notesArray = await dkeeper_backend.readNotes();
      setNotes(notesArray);
   }  


  function removeNote(id) {
    setNotes((prevNotes) => {
      dkeeper_backend.removeNote(id);  
      
      return notes.filter((note, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          remove={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

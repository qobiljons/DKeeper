import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Title",
      content: "content",
    },
  ]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function removeNote(id) {
    setNotes((prevNotes) => {
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

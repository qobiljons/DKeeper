import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.add(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div className="create-area-container">
      <form onSubmit={handleSubmit}>
        <input
          className="create-area-input"
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          className="create-area-textarea"
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button className="create-area-button">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

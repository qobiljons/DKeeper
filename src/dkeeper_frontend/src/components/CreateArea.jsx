import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (note.title || note.content) {
      props.add(note);
      setNote({ title: "", content: "" });
      setExpanded(false);
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-area-container">
      <form onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            className="create-area-input"
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          className={`create-area-textarea ${isExpanded ? 'expanded' : 'collapsed'}`}
          onChange={handleChange}
          name="content"
          onClick={() => !isExpanded && expand()}
          placeholder="Take a note..."
          value={note.content}
        />
        {isExpanded && <button className="create-area-button">Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;

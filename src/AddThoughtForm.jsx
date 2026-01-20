import { useState } from "react";
import {
  default as generateID,
  default as getNewExpirationTime,
} from "./utilities";

function AddThoughtForm(props) {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //handling form
  const handelSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      const thought = {
        id: generateID(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
      setText("");
    }
  };
  return (
    <form className="AddThoughtForm" onSubmit={handelSubmit}>
      <input
        value={text}
        type="text"
        aria-label="Whats on your mind?"
        placeholder="Whats on your mind?"
        onChange={handleTextChange}
      />

      <input type="submit" value="Add" />
    </form>
  );
}

export default AddThoughtForm;

import { useState } from "react";
import AddThoughtForm from "./AddThoughtForm";
import Thought from "./Thought";
import {
  default as generateID,
  default as getNewExpirationTime,
} from "./utilities";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateID(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateID(),
      text: "This text will disappear within 55 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  //add thought function
  const addThought = (thought) => {
    setThoughts((think) => [thought, ...think]);
  };

  //remove thought function
  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove),
    );
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>Passing Thoughts</h1>
        </header>
        <main>
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought
                key={thought.id}
                thought={thought}
                removeThought={removeThought}
              />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;

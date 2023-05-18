import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, addNote, delNote } from "./actions";

function App() {
  // const [count, setCount] = useState(0);

  const [noteText, setNoteText] = useState("");

  const myNumValue = useSelector((state) => state.reducers.updateNum);
  const myNotesList = useSelector((state) => state.reducers.updateNoteList);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <>
      <div className="container">
        <h2>Update the numbers using Redux</h2>
        <div className="button-container">
          <button onClick={() => dispatch(decNumber(3))}>-</button>
          <div>{myNumValue}</div>
          <button onClick={() => dispatch(incNumber(5))}>+</button>
        </div>

        <h2 style={{ marginTop: "5rem" }}>List of Notes </h2>
        <ul className="notes-container">
          {myNotesList.map((note, index) => (
            <div key={index} className="note">
              <span style={{ color: "aliceblue" }}>{index + 1}</span>
              <li style={{ flex: "2" }}>{note}</li>
              <p
                onClick={() => dispatch(delNote(index))}
                style={{ color: "rgb(254, 95, 95)", cursor: "pointer" }}
              >
                clear
              </p>
            </div>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="input-container">
          <p style={{ textAlign: "left" }}>Add new note...</p>
          <input
            type="text"
            onChange={(e) => {
              setNoteText(e.target.value);
            }}
            value={noteText}
          />
          <button style={{marginTop: '0.7rem'}} type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default App;

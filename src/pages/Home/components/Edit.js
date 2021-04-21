import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (Data) {
      return [
        
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...Data
      ];
    });
  }

  console.log(date, time, note);
  return (
    <div>
      <h1>todolist</h1>
      <p>thingS:</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        enter
      </button>
    </div>
  );
};

export default Edit;

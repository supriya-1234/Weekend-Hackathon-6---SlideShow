import React, { useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const { slides } = props;
  const [index, setIndex] = useState(0);
  let title = slides[index].title;
  let text = slides[index].text;
  function handleClick(action) {
    if (action === "prev") {
      setIndex(index - 1);
    } else if (action === "next") {
      setIndex(index + 1);
    } else if (action === "restart") setIndex(0);
  }
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button
        data-testid="button-prev"
        onClick={() => handleClick("prev")}
        disabled={index === 0 ? true : false}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        onClick={() => handleClick("next")}
        disabled={index === slides.length - 1 ? true : false}
      >
        Next
      </button>
      <button
        data-testid="button-restart"
        onClick={() => handleClick("restart")}
        disabled={index === 0 ? true : false}
      >
        Restart
      </button>
    </>
  );
};

export default App;

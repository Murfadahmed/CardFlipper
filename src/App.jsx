import { useState } from "react";
import "./App.css";

function App() {
  const initialDataOfCards = [
    {
      maintxt: "What is JSX?",
      onHvrtxt: "JSX is a shorthand for JavaScript XML",
    },
    {
      maintxt: "Who made this project?",
      onHvrtxt: "Murfad ahmed",
    },
    {
      maintxt: "How to give components memory?",
      onHvrtxt: "useState Hook",
    },
    {
      maintxt: "How to pass data from parent to child components?",
      onHvrtxt: "through props",
    },
    {
      maintxt: "who build react js?",
      onHvrtxt: "Jordan Walke",
    },
    {
      maintxt: "What language is React based on?",
      onHvrtxt: "JSX",
    },
    {
      maintxt:
        "What's the name of the syntax we use to describe a UI in React?",
      onHvrtxt: "JSX",
    },
  ];
  const [text, settext] = useState(initialDataOfCards);
  const handleMouseOver = (index) => {
    // console.log("mouse up", index);
    let reInitialized = [...initialDataOfCards];
    reInitialized[index].maintxt = reInitialized[index].onHvrtxt;
    settext(reInitialized);
  };
  const handleMouseLeave = () => {
    // console.log("mouse hat gaya",[...initialDataOfCards] );
    settext(initialDataOfCards);
  };
  return (
    <>
      <div className="cardsContainer">
        {text.map((card, index) => (
          <div
            className="cards"
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
          >
            {card.maintxt}
            <div className="bottom"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

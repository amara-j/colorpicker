import "./App.css";
import { React, useState } from "react";
import ColorBlock from "./ColorBlock.js";

const ColorBlockContainer = () => {
  const [blockPinState, updatePin] = useState([false, false, false, false]);

  const randomizeColor = () => {
    const randomRed = Math.floor(255 * Math.random());
    const randomGreen = Math.floor(255 * Math.random());
    const randomBlue = Math.floor(255 * Math.random());
    const randomRGB = [randomRed, randomGreen, randomBlue];
    return randomRGB;
  };

  const [colors, updateColors] = useState(
    blockPinState.map(() => randomizeColor())
  );

  const rgbToHex = (rgbArray) => {
    let hex = "";
    rgbArray.forEach((element) => {
      const elementString = element.toString(16);
      var hexComponent =
        elementString.length === 1 ? "0" + elementString : elementString;
      hex += hexComponent;
    });
    return hex;
  };

  const setBlockPinned = (index, isPinned) => {
    //console.log(index, isPinned);
    let newBlockPinState = [...blockPinState];
    newBlockPinState[index] = isPinned;
    updatePin(newBlockPinState);
    //console.log(newBlockPinState);
  };

  return (
    <div className="BlockContainer">
      <ColorBlock
        id="0"
        isPinned={blockPinState[0]}
        onChange={setBlockPinned}
      />
      <ColorBlock
        id="1"
        isPinned={blockPinState[1]}
        onChange={setBlockPinned}
      />
      <ColorBlock
        id="2"
        isPinned={blockPinState[2]}
        onChange={setBlockPinned}
      />
      <ColorBlock
        id="3"
        isPinned={blockPinState[3]}
        onChange={setBlockPinned}
      />
    </div>
  );
};

const App = () => {
  return <ColorBlockContainer />;
};

//colorBlock accepts boolean for checked/not and a function to run
//

export default App;

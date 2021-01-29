import "./App.css";
import { React, useState, useEffect } from "react";
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

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      console.log("blockpinstate: ", blockPinState);
      const updatedColors = colors.map((color, i) => {
        console.log("index:", i, blockPinState[i]);
        if (!blockPinState[i]) {
          return randomizeColor();
        }
        return color;
      });
      updateColors(updatedColors);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
      {colors.map((color, i) => {
        return (
          <ColorBlock
            id={i}
            isPinned={blockPinState[i]}
            onChange={setBlockPinned}
            color={colors[i]}
            colorHex={rgbToHex(colors[i])}
          />
        );
      })}
    </div>
  );
};

const App = () => {
  return <ColorBlockContainer />;
};

//colorBlock accepts boolean for checked/not and a function to run
//

export default App;

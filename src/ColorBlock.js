import { React, useState, useEffect } from "react";

const ColorBlock = (props) => {
  const [copyDisplayText, updateCopyDisplayText] = useState(
    "Click anywhere to copy"
  );

  // useEffect(() => {
  //   if (!props.isPinned) {
  //     console.log("now we change", props.id);
  //     console.log(props.id, props.isPinned);
  //     randomizeColor(props.isPinned);
  //   }
  // }, [props]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        console.log(props.id, props.isPinned);
        randomizeColor(props.isPinned);
      }
    });
  }, []);

  const [colorRGB, updateColorRGB] = useState([
    Math.floor(255 * Math.random()),
    Math.floor(255 * Math.random()),
    Math.floor(255 * Math.random()),
  ]);

  const randomizeColor = (isPinned) => {
    if (isPinned === false) {
      const randomRed = Math.floor(255 * Math.random());
      const randomGreen = Math.floor(255 * Math.random());
      const randomBlue = Math.floor(255 * Math.random());
      const randomRGB = [randomRed, randomGreen, randomBlue];
      const randomHex = rgbToHex(randomRGB);
      updateColorRGB(randomRGB);
      updateColorHex(randomHex);
      updateCopyDisplayText("Click anywhere to copy");
    } else {
      console.log("no");
    }
  };

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

  const [colorHex, updateColorHex] = useState(rgbToHex(colorRGB));

  const clipboardCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        updateCopyDisplayText("Copied!");
      },
      function () {
        updateCopyDisplayText("Sorry, text failed to copy:(");
      }
    );
  };

  const [displayHex, updateDisplayHex] = useState(false);

  const handleMouseEnter = () => {
    updateDisplayHex(true);
  };

  const handleMouseOut = () => {
    updateDisplayHex(false);
    updateCopyDisplayText("Click anywhere to copy");
  };

  return (
    <div
      className="ColorBlock"
      style={{ backgroundColor: `rgb(${colorRGB})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      onClick={() => clipboardCopy(colorHex)}
    >
      <input
        type="checkbox"
        onChange={(e) => props.onChange(props.id, e.target.checked)}
        checked={props.isPinned}
      ></input>
      <p>{displayHex ? colorHex : null}</p>
      <p className="copyInstructions">{displayHex ? copyDisplayText : null}</p>
    </div>
  );
};

export default ColorBlock;

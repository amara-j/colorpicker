import { React, useState, useEffect } from "react";

const ColorBlock = (props) => {
  const [copyDisplayText, updateCopyDisplayText] = useState(
    "Click anywhere to copy"
  );

  const [colorRGB, updateColorRGB] = useState([
    Math.floor(255 * Math.random()),
    Math.floor(255 * Math.random()),
    Math.floor(255 * Math.random()),
  ]);

  const randomizeColor = () => {
    const randomRed = Math.floor(255 * Math.random());
    const randomGreen = Math.floor(255 * Math.random());
    const randomBlue = Math.floor(255 * Math.random());
    const randomRGB = [randomRed, randomGreen, randomBlue];
    const randomHex = rgbToHex(randomRGB);
    updateColorRGB(randomRGB);
    updateColorHex(randomHex);
    updateCopyDisplayText("Click anywhere to copy");
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

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        randomizeColor();
      }
    });
  }, []);

  const handleCheckBoxChange = (e) => {
    props.onChange(props.id, e.target.checked);
    console.log(e.target.checked);
  };

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
  };

  return (
    <div
      className="ColorBlock"
      style={{ backgroundColor: `rgb(${colorRGB})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      onClick={() => clipboardCopy(colorHex)}
    >
      {/* <input
        type="checkbox"
        onChange={(e) => handleCheckBoxChange(e)}
        checked={props.isPinned}
      ></input> */}
      <p>{displayHex ? colorHex : null}</p>
      <p className="copyInstructions">{displayHex ? copyDisplayText : null}</p>
    </div>
  );
};

export default ColorBlock;

import { React, useState, useEffect } from "react";

const ColorBlock = (props) => {
  const [copyDisplayText, updateCopyDisplayText] = useState(
    "Click anywhere to copy"
  );

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
      style={{ backgroundColor: `rgb(${props.color})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      onClick={() => clipboardCopy(props.colorHex)}
    >
      <input
        type="checkbox"
        onChange={(e) => props.onChange(props.id, e.target.checked)}
        checked={props.isPinned}
      ></input>
      <p>{displayHex ? props.colorHex : null}</p>
      <p className="copyInstructions">{displayHex ? copyDisplayText : null}</p>
    </div>
  );
};

export default ColorBlock;

import { React, useState } from "react";
import { ReactComponent as HeartIconFilled } from "./icons/heart-filled.svg";
import { ReactComponent as HeartIconOutline } from "./icons/heart-outline.svg";
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
    <div>
      <div
        className="ColorBlock"
        style={{ backgroundColor: `rgb(${props.color})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        onClick={() => clipboardCopy(props.colorHex)}
      >
        <p>{displayHex ? props.colorHex : null}</p>
        <p className="copyInstructions">
          {displayHex ? copyDisplayText : null}
        </p>
      </div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => props.onChange(props.id, e.target.checked)}
          checked={props.isPinned}
        ></input>
        <span class="label"> "------"</span>
      </label>
    </div>
  );
};

// step 1: replace checkbox with div

export default ColorBlock;

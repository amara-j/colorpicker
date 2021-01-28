import {React, useState} from 'react';

const ColorBlock = () => {

const [colorRGB, updateColorRGB] = useState([Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())]);
const [isPinned, updatePin] = useState(false);

const rgbToHex = (rgbArray) => {
  let hex = '#';
  rgbArray.forEach(element => 
    {const elementString = element.toString(16);
    var hexComponent= elementString.length === 1 ? "0" + elementString : elementString;
    hex += hexComponent})
    return hex
}

const [colorHex, updateColorHex] = useState(rgbToHex(colorRGB))


const randomizeColor = () => {
    if (!isPinned) {
    const randomRed = Math.floor(255*Math.random());
    const randomGreen = Math.floor(255*Math.random());
    const randomBlue = Math.floor(255*Math.random());
    const randomRGB = [randomRed,randomGreen,randomBlue];
    const randomHex = rgbToHex(randomRGB);
    updateColorRGB(randomRGB)
    updateColorHex(randomHex)
}}





const handlePinChange = () => {
    updatePin(!isPinned)
}
    return (
    <div className = "ColorBlock">
    <div onClick = {() => randomizeColor()} style={{backgroundColor: `rgb(${colorRGB})`, width: "100%", height: "700px", textAlign: "center"}}></div>
   <input type = "checkbox" onClick = {() => handlePinChange()}></input>
   <div>RGB: {colorRGB.join(', ')}</div>
   <div>Hex: {colorHex}</div>
   <div></div>
   </div>
    );
}


export default ColorBlock;
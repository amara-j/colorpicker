import {React, useState, useEffect} from 'react';

const ColorBlock = () => {

const [colorRGB, updateColorRGB] = useState([Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())]);
const [isPinned, updatePin] = useState(false);

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

const rgbToHex = (rgbArray) => {
  let hex = '#';
  rgbArray.forEach(element => 
    {const elementString = element.toString(16);
    var hexComponent= elementString.length === 1 ? "0" + elementString : elementString;
    hex += hexComponent})
    return hex
}

const [colorHex, updateColorHex] = useState(rgbToHex(colorRGB))

const handlePinChange = () => {
    updatePin(!isPinned)
}

useEffect(()=> {
document.addEventListener('keydown', randomizeColor)
}, [])

    return (
    <div className = "ColorBlock">
    <div className = "ColorBlockContent" style={{backgroundColor: `rgb(${colorRGB})`}}>
{['rgb: '+  colorRGB.join(', '), 'hex: '+colorHex].join("\n \n")}
    </div>
   <input type = "checkbox" onClick = {() => handlePinChange()}></input>
   </div>
    );
}


export default ColorBlock;
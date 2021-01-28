import {React, useState, useEffect} from 'react';

const ColorBlock = (props) => {

const [colorRGB, updateColorRGB] = useState([Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())]);

const randomizeColor = () => {
    const randomRed = Math.floor(255*Math.random());
    const randomGreen = Math.floor(255*Math.random());
    const randomBlue = Math.floor(255*Math.random());
    const randomRGB = [randomRed,randomGreen,randomBlue];
    const randomHex = rgbToHex(randomRGB);
    updateColorRGB(randomRGB)
    updateColorHex(randomHex)}

const rgbToHex = (rgbArray) => {
  let hex = '#';
  rgbArray.forEach(element => 
    {const elementString = element.toString(16);
    var hexComponent= elementString.length === 1 ? "0" + elementString : elementString;
    hex += hexComponent})
    return hex
}

const [colorHex, updateColorHex] = useState(rgbToHex(colorRGB))

useEffect(()=> {
  document.addEventListener('keydown', randomizeColor)
}, [])

const handleCheckBoxChange = (e) => {
props.onChange(props.id, e.target.checked)
  console.log(e.target.checked)
}

    return (
    <div className = "ColorBlock">
    <div className = "ColorBlockContent" style={{backgroundColor: `rgb(${colorRGB})`}}>
{['rgb: '+  colorRGB.join(', '), 'hex: '+colorHex].join("\n \n")} 
    <input type = "checkbox" onChange = {(e) => handleCheckBoxChange(e)} checked = {props.isPinned}></input>
    </div>
   </div>
    );
}

//randomize color instead makes an rgb array of 4 random colors
// for any component not checked, it updates color

export default ColorBlock;
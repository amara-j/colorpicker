import {React, useState} from 'react';

const ColorBlock = () => {

const [color, updateColor] = useState(`rgb(${Math.floor(255*Math.random())},${Math.floor(255*Math.random())},${Math.floor(255*Math.random())})`)
const [isPinned, updatePin] = useState(false);

const randomizeColor = () => {
    if (!isPinned) {
    const randomRed = Math.floor(255*Math.random());
    const randomGreen = Math.floor(255*Math.random());
    const randomBlue = Math.floor(255*Math.random());
    const randomColor = `rgb(${randomRed},${randomGreen},${randomBlue})`
    updateColor(randomColor)
}}

const handlePinChange = () => {
    updatePin(!isPinned)
}

    return (
    <div className = "ColorBlock">
    <div onClick = {() => randomizeColor()} style={{backgroundColor: color, width: "100%", height: "700px", textAlign: "center"}}></div>
   <input type = "checkbox" onClick = {() => handlePinChange()}></input>
   </div>
    );
}

export default ColorBlock;
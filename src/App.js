import './App.css';
import {React, useState} from 'react';
import ColorBlock from './ColorBlock.js'

const ColorBlockContainer = () => {

const [blockPinState, updatePin] = useState([false, false, false, false]);

const setBlockPinned = (index, isPinned) => {
    console.log(index, isPinned)
    let newBlockPinState = blockPinState;
    newBlockPinState[index] = isPinned;
    updatePin(newBlockPinState);
    console.log(newBlockPinState)
}

return (
      <div className = "BlockContainer">
    <ColorBlock id = "0" isPinned = {blockPinState[0]} onChange = {(index, isPinned)=> setBlockPinned(index,isPinned)}/>
        <ColorBlock id = "1" isPinned = {blockPinState[1]} onChange = {(index, isPinned)=> setBlockPinned(index,isPinned)}/>
            <ColorBlock id = "2" isPinned = {blockPinState[2]} onChange = {(index, isPinned)=> setBlockPinned(index,isPinned)}/>
                <ColorBlock id = "3" isPinned = {blockPinState[3]} onChange = {(index, isPinned)=> setBlockPinned(index,isPinned)}/>
    </div>
)
}

const App = () => {
  return (
<ColorBlockContainer/>
  );
}


//colorBlock accepts boolean for checked/not and a function to run 
//

export default App;
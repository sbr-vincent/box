import React, { useState } from 'react'
import StyledBox from './StyledBox';

const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: "0 auto",
    width: '500px',
}


const BoxGenerator = (props) => {
    const [boxColor, setBoxColor] = useState([]);
    const [input, setInput] = useState('');
    const [size, setDimensions] = useState('');


    const createBox = () => {
        console.log("Banana")
        setBoxColor([...boxColor, {color:input, size:size}]);
        setInput('');
        setDimensions('');

    };

    return (
        <div>
            
            <label>Color: </label> 
            <input type="text" onChange={ e => setInput(e.target.value)} value={input}/>
            <label>Box Dimensions: </label> 
            <input type="text" onChange={ e => setDimensions(e.target.value)} value={size}/>
            <button onClick={ () => createBox()} >Submit</button>
            <div style={ boxContainerStyle }>
                {boxColor.map((box, i) => <StyledBox key={ i } bgColor={box.color} dimensions={box.size}/>)}
            </div>

        </div>

    );
}

export default BoxGenerator;

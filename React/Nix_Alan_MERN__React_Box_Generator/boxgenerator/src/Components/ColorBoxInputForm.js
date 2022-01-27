import React, { useState } from 'react';

const ColorBoxInputForm = (props) => {

const [boxColor, setBoxColor] = useState("#ff6347")
const [boxSize, setBoxSize] = useState(1)
const [boxarr, setBoxArr] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
        color: boxColor,
        size: boxSize
    }

    setBoxArr([...boxarr, newBox]);
    
    props.onDisplayNewBox( [...boxarr, newBox] )
    // props.onTempColor( changeColor )
    // setChangeColor("#ff6347")
    // props.changeBoxSize( boxSize )
}

return(
    <div>
        <form onSubmit={ handleSubmit }>
        <div className="rowWrapper">
            <p>Color:</p>
            <input type={"color"} onChange={(e) => setBoxColor(e.target.value)} value={boxColor}/>
            <input type={"number"} onChange={(e) => setBoxSize(e.target.value)} value={boxSize}/>
            <button>add</button>
        </div>
        </form>
        
    </div>
)
}

export default ColorBoxInputForm
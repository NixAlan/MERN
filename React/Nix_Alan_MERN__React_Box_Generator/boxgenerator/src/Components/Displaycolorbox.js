import React, { useState } from 'react';

const DisplayColorBox = (props) => {
    return(
    <div className='boxWrapper'>
        {props.onPassNewBox.map((element, index)=>{
            return(
            <div
            key={index}
            style={
                {backgroundColor: `${element.color}`, 
                 width: `${element.size}px`, 
                 height: `${element.size}px`,   
                 margin: 10,   
                }
            }
            >
            </div>
            )
        })}

    </div>
    )
}
export default DisplayColorBox
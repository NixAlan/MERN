import React from "react";
const NumberOrWord = (props) => {
  // const number = parseInt(`${props.number}`);
  if (isNaN(props.numberorword)) {
    return <p>The Word is: {props.numberorword}</p>;
  } else {
    return <p>The number is: {props.numberorword}</p>;
  }
};

export default NumberOrWord;

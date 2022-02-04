import React from "react";

const Wordformat = (props) => {
  return (
    <div>
      <p
        style={{
          color: props.inputColor,
          backgroundColor: props.inputBackgroundColor,
        }}
      >
        the word is :{" "}
      </p>
    </div>
  );
};

export default Wordformat;

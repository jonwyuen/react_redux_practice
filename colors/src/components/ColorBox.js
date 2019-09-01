import React from "react";

const ColorBox = props => {
  return (
    <div style={{ backgroundColor: props.background }} className="ColorBox">
      <span>More</span>
    </div>
  );
};

export default ColorBox;

import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;

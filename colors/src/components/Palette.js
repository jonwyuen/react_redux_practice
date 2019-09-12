import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  const changeFormat = value => {
    setFormat(value);
  };

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color[format]} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;

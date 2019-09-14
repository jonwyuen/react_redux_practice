import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <MiniPalette />
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default PaletteList;

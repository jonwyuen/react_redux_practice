import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

const Palette = ({ palette }) => {
	const { colors, paletteName, emoji } = palette;
	const [ level, setLevel ] = useState(500);
	const [ format, setFormat ] = useState("hex");

	const changeLevel = newLevel => {
		setLevel(newLevel);
	};

	const changeFormat = value => {
		setFormat(value);
	};

	const colorBoxes = colors[level].map(color => (
		<ColorBox
			key={color.id}
			id={color.id}
			paletteId={palette.id}
			background={color[format]}
			name={color.name}
			showLink
		/>
	));
	return (
		<div className="Palette">
			<Navbar
				level={level}
				changeLevel={changeLevel}
				changeFormat={changeFormat}
				showingAllColors
			/>
			<div className="Palette-colors">{colorBoxes}</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default Palette;

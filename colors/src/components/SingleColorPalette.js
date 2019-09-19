import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

const SingleColorPalette = ({ colorId, palette }) => {
	const [ format, setFormat ] = useState("hex");

	const changeFormat = value => {
		setFormat(value);
	};

	const gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			);
		}
		return shades.slice(1);
	};

	const shades = gatherShades(palette, colorId);
	const colorBoxes = shades.map(color => (
		<ColorBox
			id={color.id}
			name={color.name}
			background={color[format]}
			showLink={false}
		/>
	));

	return (
		<div className="Palette">
			<Navbar changeFormat={changeFormat} showingAllColors={false} />
			<h1>Single Color Palette</h1>
			<div className="Palette-colors">{colorBoxes}</div>
		</div>
	);
};

export default SingleColorPalette;

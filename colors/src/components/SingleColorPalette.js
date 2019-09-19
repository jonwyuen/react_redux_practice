import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const SingleColorPalette = ({ colorId, palette }) => {
	const { colors, paletteName, emoji } = palette;
	const [ format, setFormat ] = useState("hex");

	const changeFormat = value => {
		setFormat(value);
	};

	const gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		let allColors = colors;

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
			<div className="Palette-colors">{colorBoxes}</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default SingleColorPalette;

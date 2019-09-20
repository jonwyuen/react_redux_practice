import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const SingleColorPalette = ({ colorId, palette }) => {
	const { colors, paletteName, emoji, id } = palette;
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
			key={color.name}
			name={color.name}
			background={color[format]}
			showingFullPalette={false}
		/>
	));

	return (
		<div className="SingleColorPalette Palette">
			<Navbar changeFormat={changeFormat} showingAllColors={false} />
			<div className="Palette-colors">
				{colorBoxes}
				<div className="go-back ColorBox">
					<Link to={`/palette/${id}`} className="back-button">
						Go Back
					</Link>
				</div>
			</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default SingleColorPalette;

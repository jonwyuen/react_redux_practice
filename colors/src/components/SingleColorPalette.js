/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { PalettesContext } from "../context/PalettesContext";
import { generatePalette } from "../colorHelpers";
import useStyles from "../styles/PaletteStyles";

const SingleColorPalette = ({ match }) => {
	const classes = useStyles();
	const [ format, setFormat ] = useState("hex");
	const [ palettes ] = useContext(PalettesContext);
	const findPalette = id => palettes.find(palette => palette.id === id);
	const { colorId, paletteId } = match.params;
	const palette = generatePalette(findPalette(paletteId));
	const { colors, paletteName, emoji, id } = palette;

	const changeFormat = value => setFormat(value);

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
		<div className={classes.Palette}>
			<Navbar changeFormat={changeFormat} showingAllColors={false} />
			<div className={classes.colors}>
				{colorBoxes}
				<div className={classes.goBack}>
					<Link to={`/palette/${id}`}>Go Back</Link>
				</div>
			</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default SingleColorPalette;

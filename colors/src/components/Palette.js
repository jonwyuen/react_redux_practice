import React, { useState, useContext } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { PalettesContext } from "../context/PalettesContext";
import { generatePalette } from "../colorHelpers";
import useStyles from "../styles/PaletteStyles";

const Palette = ({ match }) => {
	const classes = useStyles();
	const [ palettes ] = useContext(PalettesContext);
	const findPalette = id => palettes.find(palette => palette.id === id);
	const palette = generatePalette(findPalette(match.params.id));
	const { colors, paletteName, emoji, id } = palette;
	const [ level, setLevel ] = useState(500);
	const [ format, setFormat ] = useState("hex");

	const changeLevel = newLevel => setLevel(newLevel);

	const changeFormat = value => setFormat(value);

	const colorBoxes = colors[level].map(color => (
		<ColorBox
			key={color.id}
			id={color.id}
			paletteId={id}
			background={color[format]}
			name={color.name}
			showingFullPalette
		/>
	));
	return (
		<div className={classes.Palette}>
			<Navbar
				level={level}
				changeLevel={changeLevel}
				changeFormat={changeFormat}
				showingAllColors
			/>
			<div className={classes.colors}>{colorBoxes}</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default Palette;

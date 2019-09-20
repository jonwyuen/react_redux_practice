import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import "./Palette.css";

const styles = {
	Palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column"
	},
	colors: {
		height: "90%"
	}
};

const Palette = ({ palette, classes }) => {
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

export default withStyles(styles)(Palette);

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "../styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";

const SingleColorPalette = ({ colorId, palette, classes }) => {
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

export default withStyles(styles)(SingleColorPalette);

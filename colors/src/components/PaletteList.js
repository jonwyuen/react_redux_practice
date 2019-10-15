import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { PalettesContext } from "../context/PalettesContext";
import useStyles from "../styles/PaletteListStyles";

const PaletteList = ({ history }) => {
	const [ palettes, setPalettes ] = useContext(PalettesContext);
	const classes = useStyles();
	const goToPalette = id => history.push(`/palette/${id}`);
	const deletePalette = id => {
		setPalettes(palettes => palettes.filter(palette => palette.id !== id));
	};

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
					<Link to="/palette/new">Create Palette</Link>
				</nav>
				<div className={classes.palettes}>
					{palettes.map(palette => (
						<MiniPalette
							{...palette}
							key={palette.id}
							id={palette.id}
							deletePalette={deletePalette}
							goToPalette={goToPalette}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PaletteList;

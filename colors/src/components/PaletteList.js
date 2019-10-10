import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { PalettesContext } from "../context/PalettesContext";
import useStyles from "../styles/PaletteListStyles";

const PaletteList = ({ history }) => {
	const [ palettes ] = useContext(PalettesContext);
	const classes = useStyles();
	const goToPalette = id => history.push(`/palette/${id}`);
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
							key={palette.paletteName}
							goToPalette={() => goToPalette(palette.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PaletteList;

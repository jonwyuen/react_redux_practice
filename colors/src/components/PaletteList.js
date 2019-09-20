import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteListStyles";
import { withStyles } from "@material-ui/styles";

const PaletteList = ({ classes, history, palettes }) => {
	const goToPalette = id => history.push(`/palette/${id}`);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
				</nav>
				<div className={classes.palettes}>
					{palettes.map(palette => (
						<MiniPalette
							{...palette}
							goToPalette={() => goToPalette(palette.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(PaletteList);

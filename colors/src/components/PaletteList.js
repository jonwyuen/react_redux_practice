import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
					<h1 className={classes.heading}>React Colors</h1>
					<Link to="/palette/new">Create Palette</Link>
				</nav>
				<TransitionGroup className={classes.palettes}>
					{palettes.map(palette => (
						<CSSTransition key={palette.id} classNames="fade" timeout={500}>
							<MiniPalette
								{...palette}
								key={palette.id}
								id={palette.id}
								deletePalette={deletePalette}
								goToPalette={goToPalette}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
};

export default PaletteList;

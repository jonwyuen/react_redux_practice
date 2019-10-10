import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../styles/PaletteFormNavStyles";

const PaletteFormNav = ({ handleSavePalette, handleDrawerOpen, open }) => {
	const classes = useStyles();
	const [ formShow, setFormShow ] = useState(false);
	const handleShowForm = () => setFormShow(true);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				color="default"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Create a Palette
					</Typography>
				</Toolbar>
				<div className={classes.navBtns}>
					<Link to="/">
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Go Back
						</Button>
					</Link>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleShowForm}
					>
						Save
					</Button>
				</div>
			</AppBar>
			{formShow && <PaletteMetaForm handleSavePalette={handleSavePalette} />}
		</div>
	);
};

export default PaletteFormNav;

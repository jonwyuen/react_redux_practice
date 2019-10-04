import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const PaletteFormNav = ({
	palettes,
	handleSavePalette,
	classes,
	handleDrawerOpen,
	open
}) => {
	const [ newPaletteName, setNewPaletteName ] = useState("");

	useEffect(
		() => {
			ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
				palettes.every(
					({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
				)
			);
		},
		[ palettes ]
	);

	const handleChange = e => {
		setNewPaletteName(e.target.value);
	};

	return (
		<React.Fragment>
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
						Persistent drawer
					</Typography>
					<ValidatorForm onSubmit={() => handleSavePalette(newPaletteName)}>
						<TextValidator
							label="Palette Name"
							name="newPaletteName"
							value={newPaletteName}
							onChange={handleChange}
							validators={[ "required", "isPaletteNameUnique" ]}
							errorMessages={[
								"Enter a palette name",
								"Palette name already used!"
							]}
						/>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
						<Link to="/">
							<Button variant="contained" color="secondary">
								Go Back
							</Button>
						</Link>
					</ValidatorForm>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default PaletteFormNav;

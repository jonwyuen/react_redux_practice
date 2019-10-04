import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import { NewPaletteColorsContext } from "../context/NewPaletteColorsContext";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		transition: theme.transitions.create([ "margin", "width" ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ "margin", "width" ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	},
	content: {
		flexGrow: 1,
		height: "calc(100vh - 64px)",
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
}));

const NewPaletteForm = ({ savePalette, palettes, history, maxColors = 20 }) => {
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);
	const [ currentColor, setCurrentColor ] = useState("teal");
	const [ newColorName, setNewColorName ] = useState("");
	const [ colors, setColors ] = useContext(NewPaletteColorsContext);

	useEffect(
		() => {
			ValidatorForm.addValidationRule("isColorNameUnique", value =>
				colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
			);
			ValidatorForm.addValidationRule("isColorUnique", value =>
				colors.every(({ color }) => color !== currentColor)
			);
		},
		[ colors, currentColor ]
	);

	const updateCurrentColor = newColor => setCurrentColor(newColor.hex);

	const handleDrawerOpen = () => setOpen(true);

	const handleDrawerClose = () => setOpen(false);

	const addNewColor = () => {
		const newColor = {
			color: currentColor,
			name: newColorName
		};
		setColors(colors => [ ...colors, newColor ]);
		setNewColorName("");
	};

	const handleChange = e => {
		setNewColorName(e.target.value);
	};

	const handleSavePalette = newPaletteName => {
		const newPalette = {
			paletteName: newPaletteName,
			id: newPaletteName.toLowerCase().replace(/ /g, "-"),
			colors
		};
		savePalette(newPalette);
		history.push("/");
	};

	const clearColors = () => setColors([]);

	const addRandomColor = () => {
		const allColors = palettes.map(p => p.colors).flat();
		let randomColor = allColors[Math.floor(Math.random() * allColors.length)];
		setColors(colors => [ ...colors, randomColor ]);
	};

	const paletteIsFull = colors.length >= maxColors;

	return (
		<div className={classes.root}>
			<PaletteFormNav
				open={open}
				classes={classes}
				palettes={palettes}
				handleSavePalette={handleSavePalette}
				handleDrawerOpen={handleDrawerOpen}
			/>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<Typography variant="h4">Design Your Palette</Typography>
				<div>
					<Button variant="contained" color="secondary" onClick={clearColors}>
						Clear Palette
					</Button>
					<Button
						variant="contained"
						color="primary"
						disabled={paletteIsFull}
						onClick={addRandomColor}
					>
						Random Color
					</Button>
				</div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={updateCurrentColor}
				/>
				<ValidatorForm onSubmit={addNewColor}>
					<TextValidator
						name="newColorName"
						value={newColorName}
						onChange={handleChange}
						validators={[ "required", "isColorNameUnique", "isColorUnique" ]}
						errorMessages={[
							"Enter a color name",
							"Color name must be unique",
							"Color already used!"
						]}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						disabled={paletteIsFull}
						style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
					>
						{paletteIsFull ? "Palette is Full" : "Add Color"}
					</Button>
				</ValidatorForm>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				<DndProvider backend={HTML5Backend}>
					<DraggableColorList />
				</DndProvider>
			</main>
		</div>
	);
};

export default NewPaletteForm;

import React, { useState, useContext } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import useStyles from "../styles/NewPaletteFormStyles";
import { NewPaletteColorsContext } from "../context/NewPaletteColorsContext";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const drawerWidth = 400;

const NewPaletteForm = ({ savePalette, palettes, history, maxColors = 20 }) => {
	const classes = useStyles({ drawerWidth });
	const [ open, setOpen ] = useState(false);

	const [ colors, setColors ] = useContext(NewPaletteColorsContext);

	const handleDrawerOpen = () => setOpen(true);

	const handleDrawerClose = () => setOpen(false);

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
				<div className={classes.container}>
					<Typography variant="h4" gutterBottom>
						Design Your Palette
					</Typography>
					<div className={classes.buttons}>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
							onClick={clearColors}
						>
							Clear Palette
						</Button>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							disabled={paletteIsFull}
							onClick={addRandomColor}
						>
							Random Color
						</Button>
					</div>
					<ColorPickerForm paletteIsFull={paletteIsFull} />
				</div>
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

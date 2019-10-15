import React from "react";
import useStyles from "../styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = ({ paletteName, emoji, colors, goToPalette }) => {
	const classes = useStyles();
	const miniColorBoxes = colors.map(color => (
		<div
			className={classes.miniColor}
			style={{ backgroundColor: color.color }}
			key={color.name}
		/>
	));
	return (
		<div className={classes.root} onClick={goToPalette}>
			<div className={classes.delete}>
				<DeleteIcon
					className={classes.deleteIcon}
					style={{ transition: "all 0.3s ease-in-out" }}
				/>
			</div>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
};

export default MiniPalette;

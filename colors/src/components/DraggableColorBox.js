import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.5px",
		backgroundColor: props => props.color
	}
});

const DraggableColorBox = ({ color }) => {
	const classes = useStyles({ color });
	return <div className={classes.root}>{color}</div>;
};

export default DraggableColorBox;

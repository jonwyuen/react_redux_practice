import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

// import ItemTypes from './ItemTypes'
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const ItemTypes = {
	BOX: "box"
};

const useStyles = makeStyles({
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-6px",
		backgroundColor: props => props.color,
		opacity: props => (props.isDragging ? 0 : 1),
		"&:hover svg": {
			color: "white",
			transform: "scale(1.5)"
		}
	},
	boxContent: {
		position: "absolute",
		width: "100%",
		left: "0px",
		bottom: "0px",
		padding: "10px",
		color: "rgba(0, 0, 0, 0.5)",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between"
	},
	deleteIcon: {
		transition: "all 0.3s ease-in-out"
	}
});

const DraggableColorBox = ({
	color,
	name,
	handleClick,
	index,
	moveColorBox
}) => {
	const ref = useRef(null);
	const [ , drop ] = useDrop({
		accept: ItemTypes.BOX,
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveColorBox(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		}
	});
	const [ { isDragging }, drag ] = useDrag({
		item: { type: ItemTypes.BOX, name, index },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});
	drag(drop(ref));

	const classes = useStyles({ color, isDragging });
	return (
		<div ref={ref} className={classes.root}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
};

export default DraggableColorBox;

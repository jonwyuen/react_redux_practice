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
		marginBottom: "-3.5px",
		backgroundColor: props => props.color,
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

const styles = {
	// border: "1px dashed gray",
	// padding: "0.5rem 1rem",
	// marginBottom: ".5rem",
	// backgroundColor: "white",
	// cursor: "move"
};

const DraggableColorBox = ({
	color,
	name,
	handleClick,
	id,
	index,
	moveColorBox
}) => {
	const classes = useStyles({ color });

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
		item: { type: ItemTypes.BOX, id, index },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});
	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));

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

// const style = {
// 	border: '1px dashed gray',
// 	padding: '0.5rem 1rem',
// 	marginBottom: '.5rem',
// 	backgroundColor: 'white',
// 	cursor: 'move',
// }
// const Card = ({ id, text, index, moveCard }) => {

// 	return (
// 		<div ref={ref} style={{ ...style, opacity }}>
// 			{text}
// 		</div>
// 	)
// }

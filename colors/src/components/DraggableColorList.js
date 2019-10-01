import React, { useContext, useCallback } from "react";
import DraggableColorBox from "./DraggableColorBox";
import { NewPaletteColorsContext } from "../context/NewPaletteColorsContext";
import update from "immutability-helper";

const DraggableColorList = () => {
	const [ colors, setColors ] = useContext(NewPaletteColorsContext);

	const removeColor = colorName => {
		setColors(colors => colors.filter(color => color.name !== colorName));
	};

	const moveColorBox = useCallback(
		(dragIndex, hoverIndex) => {
			const dragBox = colors[dragIndex];
			setColors(
				update(colors, {
					$splice: [ [ dragIndex, 1 ], [ hoverIndex, 0, dragBox ] ]
				})
			);
		},
		[ colors, setColors ]
	);
	const renderColorBox = (box, index) => {
		return (
			<DraggableColorBox
				index={index}
				key={box.name}
				name={box.name}
				color={box.color}
				handleClick={() => removeColor(box.name)}
				moveColorBox={moveColorBox}
			/>
		);
	};
	return (
		<React.Fragment>
			<div style={{ height: "100%", width: "100%" }}>
				{colors.map((box, i) => renderColorBox(box, i))}
			</div>
		</React.Fragment>
	);
};

export default DraggableColorList;

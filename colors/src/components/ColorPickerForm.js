import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import useStyles from "../styles/ColorPickerFormStyles";
import { NewPaletteColorsContext } from "../context/NewPaletteColorsContext";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const ColorPickerForm = ({ paletteIsFull }) => {
	const [ newColorName, setNewColorName ] = useState("");
	const [ currentColor, setCurrentColor ] = useState("teal");
	const [ colors, setColors ] = useContext(NewPaletteColorsContext);

	const updateCurrentColor = newColor => setCurrentColor(newColor.hex);

	const classes = useStyles();

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

	return (
		<div>
			<ChromePicker
				color={currentColor}
				onChangeComplete={updateCurrentColor}
				className={classes.picker}
			/>
			<ValidatorForm onSubmit={addNewColor}>
				<TextValidator
					name="newColorName"
					placeholder="Color Name"
					value={newColorName}
					onChange={handleChange}
					className={classes.colorNameInput}
					variant="filled"
					margin="normal"
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
					className={classes.addColor}
					style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
				>
					{paletteIsFull ? "Palette is Full" : "Add Color"}
				</Button>
			</ValidatorForm>
		</div>
	);
};

export default ColorPickerForm;

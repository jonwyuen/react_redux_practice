import React, { useState, useEffect, useContext } from "react";
import { PalettesContext } from "../context/PalettesContext";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const PaletteMetaForm = ({ handleSavePalette }) => {
	const [ palettes ] = useContext(PalettesContext);
	const [ open, setOpen ] = useState(true);
	const [ newPaletteName, setNewPaletteName ] = useState("");
	const handleClose = () => setOpen(false);

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

	const handleChange = e => setNewPaletteName(e.target.value);

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Chosse a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={() => handleSavePalette(newPaletteName)}>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your palette. Make sure it's unique.
						</DialogContentText>
						<TextValidator
							label="Palette Name"
							name="newPaletteName"
							value={newPaletteName}
							onChange={handleChange}
							fullWidth
							margin="normal"
							validators={[ "required", "isPaletteNameUnique" ]}
							errorMessages={[
								"Enter a palette name",
								"Palette name already used!"
							]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</React.Fragment>
	);
};

export default PaletteMetaForm;

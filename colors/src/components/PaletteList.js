import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MiniPalette from "./MiniPalette";
import { PalettesContext } from "../context/PalettesContext";
import useStyles from "../styles/PaletteListStyles";

const PaletteList = ({ history }) => {
	const [ openDeleteDialog, setOpenDeleteDialog ] = useState(false);
	const [ deletingId, setDeletingId ] = useState("");
	const [ palettes, setPalettes ] = useContext(PalettesContext);
	const classes = useStyles();
	const goToPalette = id => history.push(`/palette/${id}`);
	const deletePalette = id => {
		setPalettes(palettes => palettes.filter(palette => palette.id !== id));
	};
	const handleDeletePalette = () => {
		deletePalette(deletingId);
		closeDialog();
	};
	const openDialog = id => {
		setOpenDeleteDialog(true);
		setDeletingId(id);
	};
	const closeDialog = () => {
		setOpenDeleteDialog(false);
		setDeletingId("");
	};

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1 className={classes.heading}>React Colors</h1>
					<Link to="/palette/new">Create Palette</Link>
				</nav>
				<TransitionGroup className={classes.palettes}>
					{palettes.map(palette => (
						<CSSTransition key={palette.id} classNames="fade" timeout={500}>
							<MiniPalette
								{...palette}
								key={palette.id}
								id={palette.id}
								openDialog={openDialog}
								goToPalette={goToPalette}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
			<Dialog
				open={openDeleteDialog}
				aria-labelledby="delete-dialog-title"
				onClose={closeDialog}
			>
				<DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
				<List>
					<ListItem button onClick={handleDeletePalette}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
								<CheckIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Delete" />
					</ListItem>
					<ListItem button onClick={closeDialog}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
								<CloseIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Cancel" />
					</ListItem>
				</List>
			</Dialog>
		</div>
	);
};

export default PaletteList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useStyles from "../styles/ColorBoxStyles";

const ColorBox = ({ name, background, paletteId, id, showingFullPalette }) => {
	const classes = useStyles({ background, showingFullPalette });
	const [ copied, setCopied ] = useState(false);

	useEffect(
		() => {
			if (copied) {
				setTimeout(() => setCopied(false), 1500);
			}
		},
		[ copied ]
	);

	const changeCopyState = () => setCopied(true);

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div style={{ background }} className={classes.ColorBox}>
				<div
					style={{ background }}
					className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
				/>
				<div
					className={`${classes.copyMessage} ${copied && classes.showMessage}`}
				>
					<h1 className>copied!</h1>
					<p className={classes.copyText}>{background}</p>
				</div>
				<div>
					<div className={classes.boxContent}>
						<span className={classes.colorName}>{name}</span>
					</div>
					<button className={classes.copyButton}>Copy</button>
				</div>
				{showingFullPalette && (
					<Link
						to={`/palette/${paletteId}/${id}`}
						onClick={e => e.stopPropagation()}
					>
						<span className={classes.seeMore}>MORE</span>
					</Link>
				)}
			</div>
		</CopyToClipboard>
	);
};

export default ColorBox;

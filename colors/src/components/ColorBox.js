import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ name, background, paletteId, id, showLink }) => {
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
			<div style={{ background }} className="ColorBox">
				<div
					style={{ background }}
					className={`copy-overlay ${copied && "show"}`}
				/>
				<div className={`copy-message ${copied && "show"}`}>
					<h1>copied!</h1>
					<p>{background}</p>
				</div>
				<div className="copy-container">
					<div className="box-content">
						<span>{name}</span>
					</div>
					<button className="copy-button">Copy</button>
				</div>
				{showLink && (
					<Link
						to={`/palette/${paletteId}/${id}`}
						onClick={e => e.stopPropagation()}
					>
						<span className="see-more">More</span>
					</Link>
				)}
			</div>
		</CopyToClipboard>
	);
};

export default ColorBox;

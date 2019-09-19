import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

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

	const isDarkColor = chroma(background).luminance() <= 0.08;
	const isLightColor = chroma(background).luminance() >= 0.7;

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div style={{ background }} className="ColorBox">
				<div
					style={{ background }}
					className={`copy-overlay ${copied && "show"}`}
				/>
				<div className={`copy-message ${copied && "show"}`}>
					<h1 className>copied!</h1>
					<p className={isLightColor && "dark-text"}>{background}</p>
				</div>
				<div className="copy-container">
					<div className="box-content">
						<span className={isDarkColor && "light-text"}>{name}</span>
					</div>
					<button className={`copy-button ${isLightColor && "dark-text"}`}>
						Copy
					</button>
				</div>
				{showLink && (
					<Link
						to={`/palette/${paletteId}/${id}`}
						onClick={e => e.stopPropagation()}
					>
						<span className={`see-more ${isLightColor && "dark-text"}`}>
							MORE
						</span>
					</Link>
				)}
			</div>
		</CopyToClipboard>
	);
};

export default ColorBox;

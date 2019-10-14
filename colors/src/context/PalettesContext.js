import React, { useState, useEffect } from "react";
import { SAVED_PALETTES } from "../constants";

const PalettesContext = React.createContext([ {}, () => {} ]);

const PalettesProvider = props => {
	const [ palettes, setPalettes ] = useState(SAVED_PALETTES);
	useEffect(
		() => {
			window.localStorage.setItem("palettes", JSON.stringify(palettes));
		},
		[ palettes ]
	);

	return (
		<PalettesContext.Provider value={[ palettes, setPalettes ]}>
			{props.children}
		</PalettesContext.Provider>
	);
};

export { PalettesContext, PalettesProvider };

import React, { useState } from "react";
import seedColors from "../seedColors";

const PalettesContext = React.createContext([ {}, () => {} ]);

const PalettesProvider = props => {
	const [ palettes, setPalettes ] = useState(seedColors);

	return (
		<PalettesContext.Provider value={[ palettes, setPalettes ]}>
			{props.children}
		</PalettesContext.Provider>
	);
};

export { PalettesContext, PalettesProvider };

import React, { useState } from "react";
import { SAVED_PALETTES } from "../constants";

const NewPaletteColorsContext = React.createContext([ {}, () => {} ]);

const NewPaletteColorsProvider = props => {
	const [ colors, setColors ] = useState(SAVED_PALETTES[0].colors);

	return (
		<NewPaletteColorsContext.Provider value={[ colors, setColors ]}>
			{props.children}
		</NewPaletteColorsContext.Provider>
	);
};

export { NewPaletteColorsContext, NewPaletteColorsProvider };

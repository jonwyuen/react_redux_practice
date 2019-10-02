import React, { useState } from "react";
import seedColors from "../seedColors";

const NewPaletteColorsContext = React.createContext([ {}, () => {} ]);

const NewPaletteColorsProvider = props => {
	const [ colors, setColors ] = useState(seedColors[0]);

	return (
		<NewPaletteColorsContext.Provider value={[ colors, setColors ]}>
			{props.children}
		</NewPaletteColorsContext.Provider>
	);
};

export { NewPaletteColorsContext, NewPaletteColorsProvider };

import React, { useState } from "react";

const NewPaletteColorsContext = React.createContext([ {}, () => {} ]);

const NewPaletteColorsProvider = props => {
	const [ colors, setColors ] = useState([ { color: "blue", name: "blue" } ]);

	return (
		<NewPaletteColorsContext.Provider value={[ colors, setColors ]}>
			{props.children}
		</NewPaletteColorsContext.Provider>
	);
};

export { NewPaletteColorsContext, NewPaletteColorsProvider };

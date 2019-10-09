import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "../seedColors";
import { generatePalette } from "../colorHelpers";
import { PalettesProvider } from "../context/PalettesContext";
import { NewPaletteColorsProvider } from "../context/NewPaletteColorsContext";

const App = () => {
	const [ palettes, setPalettes ] = useState(seedColors);

	const findPalette = id => palettes.find(palette => palette.id === id);

	return (
		<Switch>
			<Route
				exact
				path="/palette/new"
				render={routeProps => (
					<PalettesProvider>
						<NewPaletteColorsProvider>
							<NewPaletteForm {...routeProps} palettes={palettes} />
						</NewPaletteColorsProvider>
					</PalettesProvider>
				)}
			/>
			<Route
				exact
				path="/"
				render={routeProps => (
					<PaletteList {...routeProps} palettes={palettes} />
				)}
			/>
			<Route
				exact
				path="/palette/:id"
				render={routeProps => (
					<Palette
						palette={generatePalette(findPalette(routeProps.match.params.id))}
					/>
				)}
			/>
			<Route
				path="/palette/:paletteId/:colorId"
				render={routeProps => (
					<SingleColorPalette
						colorId={routeProps.match.params.colorId}
						palette={generatePalette(
							findPalette(routeProps.match.params.paletteId)
						)}
					/>
				)}
			/>
		</Switch>
	);
};

export default App;

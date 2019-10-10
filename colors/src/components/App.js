import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { PalettesProvider } from "../context/PalettesContext";
import { NewPaletteColorsProvider } from "../context/NewPaletteColorsContext";

const App = () => {
	return (
		<PalettesProvider>
			<Switch>
				<Route
					exact
					path="/palette/new"
					render={routeProps => (
						<NewPaletteColorsProvider>
							<NewPaletteForm {...routeProps} />
						</NewPaletteColorsProvider>
					)}
				/>
				<Route
					exact
					path="/"
					render={routeProps => <PaletteList {...routeProps} />}
				/>
				<Route
					exact
					path="/palette/:id"
					render={routeProps => <Palette {...routeProps} />}
				/>
				<Route
					path="/palette/:paletteId/:colorId"
					render={routeProps => <SingleColorPalette {...routeProps} />}
				/>
			</Switch>
		</PalettesProvider>
	);
};

export default App;

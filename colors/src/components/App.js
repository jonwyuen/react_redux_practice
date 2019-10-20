import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { PalettesProvider } from "../context/PalettesContext";
import { NewPaletteColorsProvider } from "../context/NewPaletteColorsContext";
import "../styles/App.css";

const App = () => {
	return (
		<Route
			render={({ location }) => (
				<TransitionGroup>
					<CSSTransition key={location.key} classNames="fade" timeout={500}>
						<Switch location={location}>
							<Route
								exact
								path="/palette/new"
								render={routeProps => (
									<PalettesProvider>
										<NewPaletteColorsProvider>
											<div className="page">
												<NewPaletteForm {...routeProps} />
											</div>
										</NewPaletteColorsProvider>
									</PalettesProvider>
								)}
							/>
							<Route
								exact
								path="/"
								render={routeProps => (
									<div className="page">
										<PalettesProvider>
											<PaletteList {...routeProps} />
										</PalettesProvider>
									</div>
								)}
							/>
							<Route
								exact
								path="/palette/:id"
								render={routeProps => (
									<div className="page">
										<PalettesProvider>
											<Palette {...routeProps} />
										</PalettesProvider>
									</div>
								)}
							/>
							<Route
								path="/palette/:paletteId/:colorId"
								render={routeProps => (
									<div className="page">
										<PalettesProvider>
											<SingleColorPalette {...routeProps} />
										</PalettesProvider>
									</div>
								)}
							/>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}
		/>
	);
};

export default App;

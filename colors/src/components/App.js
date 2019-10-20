import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";
import { PalettesProvider } from "../context/PalettesContext";
import { NewPaletteColorsProvider } from "../context/NewPaletteColorsContext";
import "../styles/Page.css";

const App = () => {
	return (
		<Route
			render={({ location }) => (
				<TransitionGroup>
					<CSSTransition key={location.key} classNames="page" timeout={500}>
						<Switch location={location}>
							<Route
								exact
								path="/palette/new"
								render={routeProps => (
									<PalettesProvider>
										<NewPaletteColorsProvider>
											<Page>
												<NewPaletteForm {...routeProps} />
											</Page>
										</NewPaletteColorsProvider>
									</PalettesProvider>
								)}
							/>
							<Route
								exact
								path="/"
								render={routeProps => (
									<Page>
										<PalettesProvider>
											<PaletteList {...routeProps} />
										</PalettesProvider>
									</Page>
								)}
							/>
							<Route
								exact
								path="/palette/:id"
								render={routeProps => (
									<Page>
										<PalettesProvider>
											<Palette {...routeProps} />
										</PalettesProvider>
									</Page>
								)}
							/>
							<Route
								path="/palette/:paletteId/:colorId"
								render={routeProps => (
									<Page>
										<PalettesProvider>
											<SingleColorPalette {...routeProps} />
										</PalettesProvider>
									</Page>
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

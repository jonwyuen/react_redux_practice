import React from "react";

const RouterContext = React.createContext(null);

const routeProps = {
	match: "",
	history: "",
	location: ""
};

const RouterProvider = ({ children }) => {
	return (
		<RouterContext.Provider value={routeProps}>
			{children}
		</RouterContext.Provider>
	);
};

export { RouterContext, RouterProvider };

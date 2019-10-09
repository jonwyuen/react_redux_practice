import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

const useRouteProps = () => {
	const { match, history, location } = useContext(RouterContext);
	return { match, history, location };
};

export default useRouteProps;

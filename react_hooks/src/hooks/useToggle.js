import { useState } from "react";

const useToggle = (initialVal = false) => {
	const [ value, setValue ] = useState(initialVal);
	const toggle = () => setValue(!initialVal);
	return [ value, toggle ];
};

export default useToggle;

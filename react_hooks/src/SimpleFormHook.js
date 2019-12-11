import React from "react";
import useInputState from "./hooks/useInputState";

const SimpleFormHook = () => {
	const [ email, updateEmail, resetEmail ] = useInputState("");
	const [ username, updateUsername, resetUsername ] = useInputState("");

	return (
		<div>
			<h1>Email is {email}</h1>
			<h1>Username is {username}</h1>
			<input type="text" value={email} onChange={updateEmail} />
			<input type="text" value={username} onChange={updateUsername} />
			<button onClick={resetEmail}>Reset Email</button>
			<button onClick={resetUsername}>Reset Username</button>
		</div>
	);
};

export default SimpleFormHook;

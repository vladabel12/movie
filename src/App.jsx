import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Sidebar } from "./shared/ui/Sidebar/Sidebar";
import React from 'react';
import { createContext, useMemo } from "react";
export const ApiContext = createContext({});

function App({loggedIn}) {
	const value = useMemo(() => ({}), []);
	return (
		<>
			<div className="container">
				{loggedIn && <Sidebar />}
				<div className="page">
					<Outlet />
				</div>
			</div>
		</>
	);
}
App.propTypes = {
	loggedIn: PropTypes.bool,
};

export default App;

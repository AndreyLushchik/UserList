import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanel from "../../reset/src/components/SidePanel";

export default function Navigator() {
	return (
		<Router>
			<SidePanel />
			<Routes>
				<Route path="/" element="User list"></Route>
				<Route path="/:id/:state" element="user_profile"></Route>
			</Routes>
		</Router>
	);
}

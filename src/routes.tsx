import { Route, Routes as RoutesDom, useLocation } from "react-router-dom";

import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";

export const Routes = () => {
	const location = useLocation();

	return (
		<RoutesDom location={location} key={location.pathname}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact" element={<Contact />} />
		</RoutesDom>
	);
};

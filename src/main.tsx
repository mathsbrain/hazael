import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/providers/ThemeProvider";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Header />
				<App />
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

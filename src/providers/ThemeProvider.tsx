import { createContext, ReactNode, useState, useEffect } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ThemeContextData {
	theme: string;
	toggleTheme: () => void;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextData>(
	{} as ThemeContextData
);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [storageTheme, setStorageTheme] = useLocalStorage("@hazael:theme");
	const [theme, setTheme] = useState("light");

	const root = window.document.documentElement;

	function toggleTheme() {
		root.classList.toggle("dark");

		setTheme(theme === "light" ? "dark" : "light");
		setStorageTheme(theme === "light" ? "dark" : "light");
	}

	useEffect(() => {
		setTheme(storageTheme);

		if (!storageTheme) {
			setStorageTheme("light");
		}

		if (storageTheme === "dark") {
			root.classList.add("dark");
		}
	}, [storageTheme, setTheme, root.classList, setStorageTheme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

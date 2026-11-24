import { useEffect, useState } from "react";

export const useTheme = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const onToggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	};

	const isDarkTheme = theme === "dark";
	return { onToggleTheme, isDarkTheme };
};

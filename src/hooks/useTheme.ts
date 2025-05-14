import { useEffect, useState } from "react";
import { Theme } from "types/types";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        let defaultUserTheme: Theme;
        const storedTheme = localStorage.getItem('theme') as Theme | null;

        if (!storedTheme) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            defaultUserTheme = prefersDark ? 'dark' : 'light';
            localStorage.setItem('theme', defaultUserTheme);

        }
        else defaultUserTheme = storedTheme;

        setTheme(defaultUserTheme);
        document.documentElement.className = defaultUserTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.className = newTheme;
    };

    return { theme, toggleTheme };
};
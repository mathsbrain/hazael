import { useCallback, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue = "") {
	const [state, setState] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key);

			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch {
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value: T) => {
			try {
				setState(value);
				localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.log(error);
			}
		},
		[key]
	);

	return [state, setValue];
}

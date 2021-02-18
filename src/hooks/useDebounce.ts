import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: any) => {
	const [ debouncedValue, setDebouncedValue ] = useState(value);

	useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
			return () => {
				clearTimeout(handler);
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ value ]
	);

	return debouncedValue;
}

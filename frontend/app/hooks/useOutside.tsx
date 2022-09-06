import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type TypeOut = {
	ref: any;
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
};

export const useOutside = (initialVisible: boolean): TypeOut => {
	const [isShown, setIsShown] = useState(initialVisible);
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShown(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, false);
		};
	});
	return { ref, isShown, setIsShown };
};

/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { ReactNode } from "react";

interface ITypographyProps {
	variant:
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "subtitle1"
	| "subtitle2"
	| "body1"
	| "body2"
	| "caption"
	| "overline";
	children: ReactNode;
}

export const Typography = ({ variant, children }: ITypographyProps) => {
	const defaultClasses = "flex items-center gap-2 transition-all";

	switch (variant) {
		case "h1":
			return (
				<h1 className={`${defaultClasses} font-pop text-[4rem] font-semibold leading-[5rem] text-gray-900 dark:text-gray-100`}>
					{children}
				</h1>
			);

		case "h2":
			return (
				<h2 className={`${defaultClasses} font-pop text-[3rem] font-semibold leading-[4rem] text-gray-900 dark:text-gray-100`}>
					{children}
				</h2>
			);

		case "h3":
			return (
				<h3 className={`${defaultClasses} font-pop text-[2rem] font-semibold leading-[3rem] text-gray-900 dark:text-gray-100`}>
					{children}
				</h3>
			);

		case "h4":
			return (
				<h4 className={`${defaultClasses} font-pop text-[1.5rem] font-semibold leading-[2.25rem] text-gray-900 dark:text-gray-100`}>
					{children}
				</h4>
			);

		case "h5":
			return (
				<h5 className={`${defaultClasses} font-pop text-[1.25rem] font-semibold leading-[1.8rem] text-gray-900 dark:text-gray-100`}>
					{children}
				</h5>
			);

		case "h6":
			return (
				<h6 className={`${defaultClasses} font-pop text-[1.1rem] font-semibold leading-[1.75rem] text-gray-900 dark:text-gray-100`}>
					{children}
				</h6>
			);

		case "subtitle1":
			return (
				<p className={`${defaultClasses} font-roboto text-[1rem] font-semibold leading-[1.5rem] text-gray-800 dark:text-gray-200`}>
					{children}
				</p>
			);

		case "subtitle2":
			return (
				<p className={`${defaultClasses} font-roboto text-[0.8rem] font-semibold leading-[1.3rem] text-gray-800 dark:text-gray-200`}>
					{children}
				</p>
			);

		case "body1":
			return (
				<p className={`${defaultClasses} font-roboto text-[1rem] font-medium leading-[1.5rem] text-gray-800 dark:text-gray-200`}>
					{children}
				</p>
			);

		case "body2":
			return (
				<p className={`${defaultClasses} font-roboto text-[0.8rem] font-medium leading-[1.3rem] text-gray-800 dark:text-gray-200`}>
					{children}
				</p>
			);

		case "caption":
			return (
				<span className={`${defaultClasses} font-roboto text-[0.75rem] font-medium leading-[1.1rem] text-gray-800 dark:text-gray-200`}>
					{children}
				</span>
			);

		case "overline":
			return (
				<span className={`${defaultClasses} font-roboto text-[0.75rem] font-bold uppercase leading-[1.1rem] text-gray-800 dark:text-gray-200`}>
					{children}
				</span>
			);
	}
};

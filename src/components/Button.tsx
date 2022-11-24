/* eslint-disable indent */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size: "xs" | "sm" | "md" | "lg" | "xl";
	variant: "primary" | "secondary";
}

export function Button({
	size = "md",
	variant = "primary",
	...rest
}: ButtonProps) {
	const genericClassNames =
		"inline-flex items-center gap-1 justify-center border border-transparent transition font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 mr-5";

	let colors;
	if (variant === "primary") {
		colors =
			"bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500";
	} else {
		colors =
			"text-gray-700 bg-white border-1 border-gray-300 hover:bg-gray-200 focus:ring-gray-500";
	}

	switch (size) {
		case "xs":
			return (
				<button
					{...rest}
					className={`${genericClassNames} rounded px-2.5 py-1.5 text-xs ${colors} ${rest.className}`}
				>
					{rest.children}
				</button>
			);
		case "sm":
			return (
				<button
					{...rest}
					className={`${genericClassNames} rounded-md px-3 py-2 text-sm leading-4 ${colors} ${rest.className}`}
				>
					{rest.children}
				</button>
			);
		case "md":
			return (
				<button
					{...rest}
					className={`${genericClassNames} rounded-md px-4 py-2 text-base ${colors} ${rest.className}`}
				>
					{rest.children}
				</button>
			);
		case "lg":
			return (
				<button
					{...rest}
					className={`${genericClassNames} rounded-md px-4 py-2 text-lg ${colors} ${rest.className}`}
				>
					{rest.children}
				</button>
			);
		case "xl":
			return (
				<button
					{...rest}
					className={`${genericClassNames} rounded-md px-6 py-3 text-xl ${colors} ${rest.className}`}
				>
					{rest.children}
				</button>
			);
	}
}

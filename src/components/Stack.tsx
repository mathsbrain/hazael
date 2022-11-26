/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
interface IStackProps {
	stack: string;
	color: string;
	size?: "normal" | "small";
}

export const Stack = ({ stack, color, size = "normal" }: IStackProps) => {
	return (
		<div
			className={`w-fit rounded-sm border-2 border-blue-600 ${size === "normal" ? "px-3 py-2 text-base" : "p-1 text-xs"
				} font-pop font-medium text-blue-600`}
			style={{
				borderColor: color,
				color: color,
				fontSize: size
			}}
		>
			{stack}
		</div>
	);
};

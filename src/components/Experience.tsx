import { Typography } from "./Typography";

interface IExperienceProps {
	office: string;
	company: string;
	model: "PJ" | "CLT";
	duration: string;
	description: string;
}

export const Experience = ({
	company,
	description,
	duration,
	model,
	office
}: IExperienceProps) => {
	return (
		<div className="flex flex-col gap-2 border-l-8 border-neutral-700 px-5 py-3 dark:border-neutral-200">
			<Typography variant="body1">
				<span className="font-semibold">
					{office} <span className="font-light">at {company}</span>
				</span>
			</Typography>
			<Typography variant="body1">Modelo de contratação: {model}</Typography>
			<Typography variant="body1">
				<span className="text-neutral-400">{duration}</span>
			</Typography>
			<Typography variant="body1">
				<span>{description}</span>
			</Typography>
		</div>
	);
};

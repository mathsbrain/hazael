import { MdOutlineOpenInNew } from "react-icons/md";

import { Stack } from "@/components/Stack";
import { Typography } from "@/components/Typography";

type TStacksProps = {
	name: string;
	color: string;
};

interface IProjectProps {
	image: string;
	name: string;
	stacks: TStacksProps[];
	uriPreview: string;
	uriRepository: string;
	year: number;
}

export const Project = ({
	image,
	name,
	stacks,
	uriPreview,
	uriRepository,
	year
}: IProjectProps) => {
	return (
		<div className="relative z-10 flex flex-col items-center gap-5 rounded-md bg-amber-100 p-5 shadow-md dark:border-[1px] dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-sm md:flex-row">
			<div className="absolute right-0 top-0 rounded-tr-md rounded-bl-md bg-yellow-50 py-2 px-3 dark:bg-neutral-900">
				<Typography variant="caption">{year}</Typography>
			</div>

			<div>
				<img
					src={image}
					alt="Hazael"
					className="w-screen object-cover md:h-44 md:w-64"
				/>
			</div>

			<div className="flex w-full flex-col gap-5">
				<div>
					<Typography variant="caption">
						<span className="font-pop font-normal uppercase text-neutral-800 dark:text-neutral-400">
							nome
						</span>
					</Typography>
					<Typography variant="body1">
						<span className="font-pop font-bold">{name}</span>
					</Typography>
				</div>

				<div className="flex flex-col items-start gap-2">
					<Typography variant="caption">
						<span className="font-pop font-normal uppercase text-neutral-800 dark:text-neutral-400">
							stacks
						</span>
					</Typography>
					<div className="flex flex-wrap gap-2">
						{stacks.map((stack) => (
							<Stack
								key={stack.name}
								stack={stack.name}
								color={stack.color}
								size="small"
							/>
						))}
					</div>
				</div>

				<div className="flex gap-5">
					<Typography variant="caption">
						<a
							href={uriPreview}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1 text-neutral-700 underline dark:text-neutral-400"
						>
							live preview <MdOutlineOpenInNew size={15} />
						</a>
					</Typography>

					<Typography variant="caption">
						<a
							href={uriRepository}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1 text-neutral-700 underline dark:text-neutral-400"
						>
							repo <MdOutlineOpenInNew size={15} />
						</a>
					</Typography>
				</div>
			</div>
		</div>
	);
};

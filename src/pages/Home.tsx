import { Link } from "react-router-dom";

import { TemplateDefault } from "@/components/Template";
import { Typography } from "@/components/Typography";

export const Home = () => {
	return (
		<TemplateDefault>
			<div className="mx-auto md:w-5/12">
				<Typography variant="h3">
					<span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
						Matheus Antunes
					</span>
				</Typography>

				<div className="my-5 flex flex-col gap-2">
					<Typography variant="subtitle1">
						<span className="font-light">
							Software engineer | Front-End Developer at{" "}
							<a
								className="font-normal text-black underline transition-all dark:text-white"
								href="https://nkey.com.br"
								target={"_blank"}
								rel="noreferrer"
								title="Nkey - Soluções Digitais"
							>
								@Nkey.
							</a>
						</span>
					</Typography>

					<Typography variant="subtitle1">
						<span className="font-light text-gray-500">
							Um programador que ama criar e desenvolver telas lindas e
							funcionais.
						</span>
					</Typography>
				</div>

				<div className="w-fit">
					<Typography variant="subtitle1">
						<span className="font-medium">
							Conheça um pouco mais{" "}
							<Link
								to="/about"
								className="ml-1 rounded-sm bg-zinc-300 py-1 px-2 font-normal text-black underline shadow-sm shadow-gray-200 transition-all dark:bg-zinc-600 dark:text-white"
							>
								Sobre mim
							</Link>
						</span>
					</Typography>
				</div>
			</div>
		</TemplateDefault>
	);
};

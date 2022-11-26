import { TemplateDefault } from "@/components/Template";
import { Typography } from "@/components/Typography";

export const Home = () => {
	return (
		<TemplateDefault>
			<div className="mx-auto flex flex-col items-center justify-center gap-4 pt-28 md:w-5/12">
				<Typography variant="h3">
					<span className="mx-auto bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
						Matheus Antunes
					</span>
				</Typography>

				<div className="flex flex-col gap-2">
					<Typography variant="subtitle1">
						<span className="mx-auto text-center text-xl font-light">
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
						<span className="mx-auto text-center text-xl font-light text-gray-500">
							Um dev que ama criar e desenvolver telas lindas e funcionais.
						</span>
					</Typography>
				</div>

				<div className="mx-auto w-fit">
					<Typography variant="subtitle1">
						<span className="text-lg font-light">always learning 🔥</span>
					</Typography>
				</div>

				<div className="mt-5 flex items-center justify-center gap-10">
					<Typography variant="h6">
						<span className="font-light">
							<a
								href="https://instagram.com/omath.dev"
								target="_blank"
								rel="noreferrer"
								className="transition-all hover:text-pink-500"
							>
								instagram
							</a>
						</span>
					</Typography>
					<Typography variant="h6">
						<span className="font-light">
							<a
								href="https://github.com/mathsbrain"
								target="_blank"
								rel="noreferrer"
								className="transition-all hover:text-gray-600"
							>
								github
							</a>
						</span>
					</Typography>
					<Typography variant="h6">
						<span className="font-light">
							<a
								href="https://linkedin.com/in/mathsbrain"
								target="_blank"
								rel="noreferrer"
								className="transition-all hover:text-blue-600"
							>
								linkedin
							</a>
						</span>
					</Typography>
				</div>
			</div>
		</TemplateDefault>
	);
};

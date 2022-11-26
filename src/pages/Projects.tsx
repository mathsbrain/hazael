import { Project } from "@/components/Project";
import { TemplateDefault } from "@/components/Template";
import { Typography } from "@/components/Typography";

export const Projects = () => {
	return (
		<TemplateDefault>
			<div className="mx-auto flex flex-col gap-6 pt-32 sm:w-7/12 md:w-7/12 xl:w-4/12">
				<Typography variant="h3">
					<span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
						Meus projetos
					</span>
				</Typography>

				<Typography variant="body1">
					Nessa página você verá os projetos que eu desenvolvi durante minha
					carreira.
				</Typography>

				<Project
					name="Hazael"
					stacks={[
						{ name: "React", color: "#61DAFB" },
						{ name: "Typescript", color: "#38BDF8" },
						{ name: "Tailwind CSS", color: "#0070F3" },
						{ name: "Framer motion", color: "#8D1EEE" }
					]}
					uriPreview="https://mathsbrain.dev/"
					uriRepository="https://github.com/mathsbrain/hazael"
					year={2022}
				/>
			</div>
		</TemplateDefault>
	);
};

import { Typography } from "@/components/Typography";

export const Footer = () => {
	return (
		<footer className="flex w-full items-center justify-center gap-5 bg-yellow-50 p-4 pt-28 backdrop-blur-lg dark:bg-neutral-900">
			<Typography variant="body2">
				<span className="font-light">
					© 2022 Matheus Antunes. Todos os direitos reservados.
				</span>
			</Typography>
		</footer>
	);
};

import { Typography } from "@/components/Typography";

export const Footer = () => {
	return (
		<footer className="fixed bottom-0 flex w-full items-center justify-center gap-5 p-4 backdrop-blur-lg">
			<Typography variant="body2">
				<span className="font-light">
					© 2022 Matheus Antunes. Todos os direitos reservados.
				</span>
			</Typography>
		</footer>
	);
};

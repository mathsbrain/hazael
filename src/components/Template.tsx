import React from "react";

interface ITemplateDefaultProps {
	children: React.ReactNode;
}

export const TemplateDefault = ({ children }: ITemplateDefaultProps) => {
	return (
		<main className="flex h-screen items-center justify-center gap-4 bg-yellow-50 px-5 transition-all dark:bg-neutral-900">
			{children}
		</main>
	);
};

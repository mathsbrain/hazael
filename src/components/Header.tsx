/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import { AnimatePresence, motion } from "framer-motion";
import { BiSun } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import LogoImg from "@/assets/logo.svg";
import { Typography } from "@/components/Typography";
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="fixed flex w-full items-center justify-between bg-gray-700 bg-opacity-[0.05] p-4 backdrop-blur-lg">
			<Link to="/">
				<img src={LogoImg} alt="Logo Math'sbrain" className="w-10" />
			</Link>

			<ul className="flex items-center gap-16">
				<li>
					<Link to="/about" className="transition-all">
						<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
							<div className="z-20 flex items-center gap-2">
								<Typography variant="body1"><span className="font-pop font-normal uppercase">Sobre</span></Typography>
							</div>
							<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
								<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
							</div>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/projects" className="transition-all">
						<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
							<div className="z-20 flex items-center gap-2">
								<Typography variant="body1"><span className="font-pop font-normal uppercase">Projetos</span></Typography>
							</div>
							<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
								<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
							</div>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/contact" className="transition-all">
						<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
							<div className="z-20 flex items-center gap-2">
								<Typography variant="body1"><span className="font-pop font-normal uppercase">Contato</span></Typography>
							</div>
							<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
								<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
							</div>
						</div>
					</Link>
				</li>
			</ul>

			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					style={{ display: "inline-block" }}
					key={theme}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 20, opacity: 0 }}
					transition={{ duration: 0.15 }}
				>
					<button
						title="Theme"
						onClick={toggleTheme}
						className={`${theme === "dark" ? "bg-amber-400" : "bg-purple-700"
							} rounded-md p-3`}
					>
						{theme === "dark" ? (
							<BiSun size={17} color="#262626" />
						) : (
							<BsFillMoonStarsFill size={17} color="#F9F9F9" />
						)}
					</button>
				</motion.div>
			</AnimatePresence>
		</header>
	);
};

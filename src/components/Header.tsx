/* eslint-disable @typescript-eslint/indent */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { BiSun } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import LogoImg from "@/assets/logo.svg";
import { Typography } from "@/components/Typography";
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Popover className="fixed z-20 flex w-full items-center justify-between bg-gray-700 bg-opacity-[0.05] p-4 backdrop-blur-lg" as="header">
			<Link to="/">
				<img src={LogoImg} alt="Logo Math'sbrain" className="w-10" />
			</Link>

			<ul className="hidden items-center gap-16 md:flex">
				<li>
					<Link to="/" className="transition-all">
						<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
							<div className="z-20 flex items-center gap-2">
								<Typography variant="body1"><span className="font-pop font-normal uppercase">home</span></Typography>
							</div>
							<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
								<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-yellow-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
							</div>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/about" className="transition-all">
						<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
							<div className="z-20 flex items-center gap-2">
								<Typography variant="body1"><span className="font-pop font-normal uppercase">sobre</span></Typography>
							</div>
							<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
								<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-yellow-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
							</div>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/projects" className="transition-all">
						<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
							<div className="z-20 flex items-center gap-2">
								<Typography variant="body1"><span className="font-pop font-normal uppercase">projetos</span></Typography>
							</div>
							<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
								<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-yellow-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
							</div>
						</div>
					</Link>
				</li>
			</ul>

			<div className="flex items-center gap-5">
				<div className="-my-2 -mr-2 md:hidden">
					<Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
						<div>
							<CgMenuRightAlt
								className="transition-all"
								color={theme === "dark" ? "#F9F9F9" : "#262626"}
								size={30}
							/>
						</div>
					</Popover.Button>
				</div>

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
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden"
				>
					<div className="divide-y-2 divide-gray-50 rounded-lg bg-yellow-50 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-zinc-700">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<Link to="/">
										<img src={LogoImg} alt="Logo Math'sbrain" className="w-10" />
									</Link>
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
										<div>
											<IoClose
												color={theme === "dark" ? "#F9F9F9" : "#262626"}
												size={30}
											/>
										</div>
									</Popover.Button>
								</div>
							</div>
							<div className="my-6">
								<ul className="flex flex-col items-center gap-5">
									<li>
										<Link to="/" className="transition-all">
											<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
												<div className="z-20 flex items-center gap-2">
													<Typography variant="body1"><span className="font-pop font-normal uppercase">Home</span></Typography>
												</div>
												<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
													<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/about" className="transition-all">
											<div className="group relative flex cursor-pointer flex-col items-start md:col-span-3">
												<div className="z-20 flex items-center gap-2">
													<Typography variant="body1"><span className="font-pop font-normal uppercase">sobre</span></Typography>
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
													<Typography variant="body1"><span className="font-pop font-normal uppercase">projetos</span></Typography>
												</div>
												<div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">
													<div className="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/50 sm:-inset-x-6 sm:rounded-md"></div>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

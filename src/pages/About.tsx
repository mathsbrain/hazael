import MathImg from "@/assets/math.png";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { TemplateDefault } from "@/components/Template";
import { Typography } from "@/components/Typography";

export const About = () => {
	return (
		<TemplateDefault>
			<div className="mx-auto flex flex-col gap-14 pt-28 sm:w-7/12 md:w-7/12 xl:w-4/12">
				<div className="flex flex-col gap-12">
					<div className="flex gap-4">
						<img src={MathImg} alt="Matheus Antunes" />
						<div className="flex flex-col justify-center gap-2">
							<Typography variant="h3">
								<span className="mx-auto bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
									Sobre Mim
								</span>
							</Typography>
							<Typography variant="h6">
								<a
									href="https://instagram.com/omath.dev"
									target="_blank"
									rel="noreferrer"
								>
									<span className="font-light">@omath.dev</span>
								</a>
							</Typography>
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<Typography variant="body1">
							Meu nome é Matheus, tenho 23 anos, moro em Londrina no norte do
							Paraná, sou desenvolvedor front-end de sites e sistemas, designer
							de interfaces e nas horas vagas também sou músico.
						</Typography>
						<Typography variant="body1">
							Sou desenvolvedor Web, especializado em ReactJS que é a tecnologia
							usada para desenvolvimento das maiores plataformas e sites
							atualmente, como Netflix, Figma, Twitter, Disney+ e por aí vai.
							Além de executar o design, eu também amo criar interfaces, sempre
							pensando no mais simples e funcional possível, o simples funciona.
						</Typography>
						<Typography variant="body1">
							Nas horas vagas eu também brinco um pouco na música. Comecei
							aprendendo a tocar violão com 10 anos de idade, depois de um
							tempo, naturalmente como sempre acontece migrei para a guitarra e
							foquei anos nesses dois instrumentos. Um tempo depois resolvi
							aprender a tocar bateria e depois teclado, e mais recentemente
							ainda inventei de querer cantar também, resumindo a música faz
							parte da minha vida e durante muito tempo quis ser músico
							profissional inclusive.
						</Typography>
					</div>
				</div>

				<div className="flex flex-col gap-8">
					<Typography variant="h3">Stacks</Typography>

					<div className="flex flex-wrap gap-4">
						<Stack stack="HTML" color="#F1662B" />
						<Stack stack="CSS" color="#2FA9DB" />
						<Stack stack="Javascript" color="#F0BF25" />
						<Stack stack="React" color="#61DAFB" />
						<Stack stack="Typescript" color="#38BDF8" />
						<Stack stack="Tailwind CSS" color="##0070F3" />
						<Stack stack="Figma" color="#0ACF83" />
						<Stack stack="CSS-in-JS" color="#D200C1" />
						<Stack stack="Next JS" color="#38BDF8" />
						<Stack stack="Framer motion" color="#8D1EEE" />
						<Stack stack="React Hook Form" color="#ED5890" />
						<Stack stack="Styled components" color="#1eac59" />
					</div>
				</div>

				<div className="flex flex-col gap-8">
					<Typography variant="h3">Minha carreira</Typography>

					<div className="flex flex-col gap-8">
						<Experience
							office="Front-End Pleno"
							company="@Nkey"
							model="PJ"
							description="Desenvolvimento Front-end de sites e sistemas web"
							duration="Fev 2022 - Atualmente • Florianópolis - SC"
						/>

						<Experience
							office="Developer web front-end"
							company="@Expression"
							model="PJ"
							description="Desenvolvimento Front-end de sites e sistemas web"
							duration="Abr 2021 - Fev 2022 • Florianópolis - SC"
						/>

						<Experience
							office="Engenheiro de software líder"
							company="@quoote"
							model="PJ"
							description="Realizar a organização de layout;
							Organizar a arquitetura de software dos projetos;
							Responsável pelo desenvolvimento das api’s"
							duration="Fev 2020 - Abr 2021 • Londrina - PR"
						/>

						<Experience
							office="Programador júnior"
							company="@DSlite"
							model="CLT"
							description="Front-end do sistema interno"
							duration="Dez 2018 - Nov 2019 • Londrina - PR"
						/>

						<Experience
							office="Desenvolvedor júnior"
							company="@Prontosoft"
							model="CLT"
							description="Encarregado pelo desenvolvimento do aplicativo Pronto Mobile (App Android - uso
								exclusivo da instituição)"
							duration="Jan 2017 - Nov 2018 • Londrina - PR"
						/>
					</div>
				</div>
			</div>
		</TemplateDefault>
	);
};

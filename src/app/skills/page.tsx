import { ILanguage, ISkills, keyToTitle, mySkills } from "@/data/skilss";

import Footer from "@/components/Footer";
import { Metadata } from "next";
import SkillBox from "@/components/SkillBox";

export const metadata: Metadata = {
	title: "Skills | Arun Kumar",
};
const skills = () => {
	return (
		<>
			<section>
				<div className="w-full">
					<p className="text-2xl font-bold  ">Tech Stack</p>
					<br />
					<p className="w-[8.4rem] border-b-yellow-400 border-b-4 relative -top-6"></p>
					<p className="text-lg font-bold ">{keyToTitle["languages"]}</p>
					<br />
					<p className="w-[6rem] border-b-yellow-400 border-b-2 relative -top-6"></p>
					<div className="flex w-full gap-4 flex-wrap -mt-3 -mb-3">
						{mySkills.languages.map((lang: ILanguage) => (
							<div key={lang.id} className="w-fit">
								<SkillBox logo={lang.logo} name={lang.name} />
							</div>
						))}
					</div>
					<br />
					<p className="text-lg font-bold ">{keyToTitle["frameworks"]}</p>
					<br />
					<p className="w-[13rem] border-b-yellow-400 border-b-2 relative -top-6"></p>
					<div className="flex w-full gap-4 flex-wrap -mt-3 -mb-3">
						{mySkills.frameworks.map((lang: ILanguage) => (
							<div key={lang.id} className="w-fit">
								<SkillBox logo={lang.logo} name={lang.name} />
							</div>
						))}
					</div>
					<br />
					<p className="text-lg font-bold ">{keyToTitle["databases"]}</p>
					<br />
					<p className="w-[6rem] border-b-yellow-400 border-b-2 relative -top-6"></p>
					<div className="flex w-full gap-4 flex-wrap -mt-3 ">
						{mySkills.databases.map((lang: ILanguage) => (
							<div key={lang.id} className="w-fit">
								<SkillBox logo={lang.logo} name={lang.name} />
							</div>
						))}
					</div>

					<br />
					<p className="text-lg font-bold ">{keyToTitle["tools"]}</p>
					<br />
					<p className="w-[3rem] border-b-yellow-400 border-b-2 relative -top-6"></p>
					<div className="flex w-full gap-4 flex-wrap -mt-3">
						{mySkills.tools.map((lang: ILanguage) => (
							<div key={lang.id} className="w-fit">
								<SkillBox logo={lang.logo} name={lang.name} />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default skills;

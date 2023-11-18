import ProjectCard, { IProject } from "@/components/ProjectCard";

import { Metadata } from "next";
import { projectList } from "@/data/projects";

export const metadata: Metadata= {
	title: "Projects | Arun Kumar",
};
const projects = () => {
	return (
		<section>
			<div className="w-full">
				<p className="text-2xl font-bold ">Featured Projects</p>
				<br />
				<p className="w-[12.8rem] border-b-yellow-400 border-b-4 relative -top-6"></p>
				<div className="space-y-10">
					{projectList.map((projectData: IProject) => (
						<ProjectCard projectData={projectData} key={projectData.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default projects;

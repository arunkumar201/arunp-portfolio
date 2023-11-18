import Image from "next/image";
import Link from "next/link";

export interface IProject {
	image: string | any;
	title: string;
	tech: string[];
	url: string;
	des: string;
	id?: number;
}
const ProjectCard = ({ projectData }: { projectData: IProject }) => {
	const { image, title, des, tech, url } = projectData;

	return (
		<div className="flex justify-center lg:justify-start">
			<article className="relative inline-flex max-w-max">
				<header className="w-full md:top-2/4 bottom-2/4 md:right-2/4 md:left-2/3  md:-translate-x-2/4 md:-translate-y-2/4 z-10 md:absolute  flex items-center justify-center ml-3 lg:ml-[22.5rem]">
					<div className="flex flex-col flex-wrap justify-center gap-2">
						<Link
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className=" block text-xl font-bold  md:text-2xl md:w-[44rem]"
						>
							{title}
						</Link>

						<div
							className={
								"md:text-left text-xs md:text-base   p-4 border-2 border-gray-300 rounded-lg w-72 md:w-[32rem] flex md:ml-0 ml-6"
							}
						>
							{des}
						</div>
						<div className="flex flex-wrap justify-center gap-2 p-1 mt-2 text-xs cursor-default md:justify-start md:text-sm text-sh-white">
							{tech?.map((tech, index) => (
								<div
									key={index}
									className="flex flex-wrap items-center bg-[#610C9F]/20 border-2 border-gray-500 rounded-lg px-1 py-1 hover:shadow-lg transition-transform transform ease-in hover:scale-105 cursor-default"
								>
									<div className="p-1 text-center rounded-md">
										{tech}
									</div>
								</div>
							))}
						</div>
					</div>
				</header>

				<Link href={url} target="_blank" rel="noopener noreferrer" className="hidden md:block">
					<div className="opacity-25 md:opacity-50 hover:opacity-100 w-full md:w-[35rem] rounded-lg border-2 bg-blue-300 border-gray-400 relative scale-[.99] hover:scale-100 transition ease-in shadow-lg flex ">
						<Image
							className="w-full h-full rounded-lg"
							src={image}
							alt={title + " image"}
							width={500}
							height={500}
						/>
					</div>
				</Link>
			</article>
		</div>
	);
};

export default ProjectCard;

import { Code2Icon, Globe2Icon, Laptop2Icon, MoreHorizontal } from "lucide-react";

import DownloadResume from "./DownloadResume";

type Props = {};

const IntroText = (props: Props) => {
	return (
		<div className="p-2 rounded-lg shadow-xl text-gray-50 selection:bg-pink-500">
			<p className="text-2xl font-bold text-gray-300 mb-3">
				I am <span className="text-indigo-600 hover:border-b-4 border-yellow-300 cursor-pointer">Arun Kumar</span> ,a skilled Full
				Stack Web and Web3 Developer from India
			</p>
			<div className="bg-gray-800 text-white p-4 rounded-lg selection:bg-pink-500">
				<p className="text-gray-300 mb-4 flex items-center ">
					<Code2Icon
						className="inline-block mr-2 text-indigo-500 self-start "
						size={44}
					/>{" "}
					<span className="scroll-m-20 text-base font-semibold tracking-tight leading-7 self-start mt-2">
						My professional journey is deeply rooted in a commitment to full
						stack technologies, and my dedication extends to collaborating on
						open-source projects.
					</span>
				</p>
				<p className="text-gray-300 flex items-center">
					<Globe2Icon
						className="inline-block mr-2 text-indigo-500 self-start text-lg"
						size={44}
					/>
					<span className="scroll-m-20 text-base leading-7 font-semibold tracking-tight mt-2">
						My unwavering passion lies in crafting exceptional software
						solutions that positively impact the lives around me. With a wealth
						of experience and expertise in my arsenal, I am poised to deliver
						excellence in the realm of Full Stack & Web3 development.
					</span>
				</p>
				<p className="text-gray-300 flex items-center ">
					<DownloadResume />
				</p>
			</div>
		</div>
	);
};

export default IntroText;

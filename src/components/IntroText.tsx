import { Code2Icon, Globe2Icon, Laptop2Icon, MoreHorizontal } from "lucide-react";

import DownloadResume from "./DownloadResume";

type Props = {};

const IntroText = (props: Props) => {
	return (
		<div className="p-2 rounded-lg shadow-xl text-gray-50 selection:bg-pink-500 sm:m-2">
			<p className="w-full mb-3 text-2xl font-bold text-gray-300">
				I am{" "}
				<span className="text-indigo-600 border-yellow-300 cursor-pointer hover:border-b-4">
					Arun Kumar
				</span>{" "}
				,a skilled Full Stack Web and Web3 Developer from India.
			</p>
			<div className="p-4 text-white bg-gray-800 rounded-lg selection:bg-pink-500">
				<p className="flex flex-row items-center justify-between leading-7 text-gray-300">
					<Globe2Icon
						className="relative flex self-start mr-2 text-lg text-indigo-500"
						size={24}
					/>
					<span className="-mt-1 text-base font-medium leading-8 tracking-wide">
						I am passionate about building excellent software that improves the
						lives of those around me.
					</span>
				</p>
				<p className="flex items-center text-gray-300 ">
					<Code2Icon
						className="self-start inline-block mr-2 text-lg text-indigo-500"
						size={44}
					/>{" "}
					<span className="self-start mt-1 mb-3 text-base font-medium leading-8 tracking-tight scroll-m-20">
						My professional journey is deeply rooted in a commitment to full
						stack technologies, and my dedication extends to collaborating on
						open-source projects.
					</span>
				</p>
				<p className="flex items-center text-gray-300 ">
					<DownloadResume />
				</p>
			</div>
		</div>
	);
};

export default IntroText;

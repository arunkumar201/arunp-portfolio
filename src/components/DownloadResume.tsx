import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const ResumePath = `https://drive.google.com/file/d/1tYqQAAXJmRw4PPV-K7hKx5qm3A8mNfo8/view?usp=sharing`;

function DownloadResume() {


	return (
		<div className="relative inline-block text-left mt-6 mb-3">
			<Link
				href={ResumePath}
				role="resume"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button
					variant="secondary"
					className="flex justify-center items-end rounded-md  px-4 py-2 text-sm dark:bg-gray-700 dark:text-gray-100 "
				>
					<span>
					Resume
					</span>
					<DownloadIcon className="inline-block text-base ml-2" size={18} />
				</Button>
			</Link>
		</div>
	);
}

export default DownloadResume;

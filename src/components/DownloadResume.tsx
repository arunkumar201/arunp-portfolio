import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const ResumePath = `https://drive.google.com/file/d/1tYqQAAXJmRw4PPV-K7hKx5qm3A8mNfo8/view?usp=sharing`;

function DownloadResume() {


	return (
		<div className="relative inline-block mt-6 mb-3 text-left">
			<Link
				href={ResumePath}
				role="link"
				target="_blank"
				aria-label="Resume"
				rel="noopener noreferrer"
			>
				<Button
					variant="secondary"
					className="flex items-end justify-center px-4 py-2 text-sm rounded-md dark:bg-gray-700 dark:text-gray-100 "
				>
					<span>Resume</span>
					<DownloadIcon className="inline-block ml-2 text-base" size={18} />
				</Button>
			</Link>
		</div>
	);
}

export default DownloadResume;

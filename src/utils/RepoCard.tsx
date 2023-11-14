import { ExternalLink, GitMerge, Star } from "lucide-react";

import Link from "next/link";

const RepoCard = ({ repos }: { repos: GitHubRepository[] }) => {

	console.log(
		"🚀 ~ file: RepoCard.tsx:7 ~ RepoCard ~ repos:",
		repos[0].value.topics[0]
);



	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
			{repos?.map((item: Partial<GitHubRepository>) => (
				<div
					key={item.value?.id}
					className="p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]"
				>
					<article className="flex flex-col justify-between h-full">
						<header className="flex justify-between items-center mb-2 flex-wrap gap-2">
							
							<Link
								href={item.value?.html_url ?? ""}
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in"
							>
								{item.value?.name}
							</Link>
							<div className="flex items-center gap-2 cursor-default">
								{item.value?.homepage && (
									<div className="flex items-center">
										<Link href={item.value?.homepage} target="_blank">
											<ExternalLink className="hover:text-blue-200 transition ease-in" />
										</Link>
									</div>
								)}
								<div className="flex items-center">
									<Star />
									<span className="ml-1">{item.value?.stargazers_count}</span>
								</div>
								<div className="flex item.value?s-center">
									<GitMerge />
									<span className="ml-1">{item.value?.forks_count}</span>
								</div>
							</div>
						</header>

						<p className="text-sh-white-500 overflow-hidden h-12 line-clamp-2">
							{item.value?.description}
						</p>

						<p className="flex gap-2 mt-3 cursor-default flex-wrap">
								{item.value?.topics.map((topic: string, index: number) => (
										<span
											className="bg-gray-500 rounded-3xl px-2 py-1 text-sm overflow-hidden truncate"
											key={index}
										>
											{topic}
										</span>
									))}
							</p>
					</article>
				</div>
			))}
		</div>
	);
};

export default RepoCard;

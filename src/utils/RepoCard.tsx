import { ExternalLink, GitMerge, Star } from "lucide-react";

import Link from "next/link";

const RepoCard = ({ repos }: { repos: GitHubRepository[] }) => {
console.log(repos[1]);



	return (
		<div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2">
			{repos?.map((item: Partial<GitHubRepository>) => (
				<div
					key={item.value?.id}
					className="p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]"
				>
					<article className="flex flex-col justify-between h-full">
						<header className="flex flex-wrap items-center justify-between gap-2 mb-2">
							<Link
								href={item.value?.html_url ?? ""}
								target="_blank"
								aria-label={item.value?.name}
								rel="noopener noreferrer"
								className="inline-block text-lg font-bold transition ease-in text-sh-blue hover:text-sh-blue-500"
							>
								{item.value?.name}
							</Link>
							<div className="flex items-center gap-2 cursor-default">
								{item.value?.homepage && (
									<div className="flex items-center">
										<Link
											href={item.value?.homepage}
											target="_blank"
											aria-aria-label={item.value?.homepage}
										>
											<ExternalLink className="transition ease-in hover:text-blue-200" />
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

						<p className="h-12 overflow-hidden text-sh-white-500 line-clamp-2">
							{item.value?.description}
						</p>

						<p className="flex flex-wrap gap-2 mt-3 cursor-default">
							{item.value?.topics.map((topic: string, index: number) => (
								<span
									className="px-2 py-1 overflow-hidden text-sm truncate bg-gray-500 rounded-3xl"
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

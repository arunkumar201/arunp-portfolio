import { GITHUB_API_URL, GITHUB_USERNAME } from "../../config";

import Link from "next/link";
import { MousePointerClick } from "lucide-react";
import RepoCard from "@/utils/RepoCard";
import { featuredRepositories } from "@/data/HighlightLists";

const FeaturedRepos = async () => {
	let reposData = null;
	try {
		reposData = await Promise.allSettled(
			featuredRepositories.map(async (repoName: string) => {
				const response = await fetch(
					`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`,
					{
						headers: {
							Accept: "application/vnd.github.mercy-preview+json",
						},
						next: {
							revalidate: 3600,
						},
					}
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return await response.json();
			})
		);
	} catch (error) {
		console.error("Error fetching repository data:", error);
	}

	return (
		<section className="m-2">
			<p className="text-2xl bg-gray-100 dark:bg-inherit">
				Featured Repositories
			</p>
			<br />
			<p className="w-[15.5rem] border-b-yellow-400 border-b-4 relative -top-7"></p>
			<div className="mt-3 space-y-4">
				<RepoCard repos={reposData as GitHubRepository[]} />
			</div>
			<div className="flex justify-center">
				<Link href="/showcase">
					<p className="flex justify-center w-auto gap-2 mt-10 text-base transition ease-in text-sh-blue hover:text-sh-blue-500">
						<p className="mb-2">More Repositories</p>
						<MousePointerClick className="inline-block text-xl" />
					</p>
				</Link>
			</div>
		</section>
	);
};

export default FeaturedRepos;

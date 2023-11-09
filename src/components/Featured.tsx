import { GITHUB_API_URL, GITHUB_USERNAME } from "../../config";

import { Button } from "./ui/button";
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
								next: {
									revalidate: 259200,
								},
							}
						);

					 if (!response.ok) {
						 throw new Error("Network response was not ok");
					 }
					 return await response.json();
				 }),
			 );

			 
			}
			catch (error) {
				console.error("Error fetching repository data:", error);
			}
		  
  return (
		<section className="m-2">
			<Button variant={"outline"} className="bg-gray-100 dark:bg-inherit">Featured Repositories</Button>
			<div className="space-y-4 mt-3">
				<RepoCard repos={reposData as GitHubRepository[]} />
			</div>
			<div className="flex justify-center">
				<Link href="/showcase">
					<p className="gap-2 text-sh-blue hover:text-sh-blue-500 text-base mt-10 transition ease-in w-auto flex justify-center">
						<p>More Repositories</p>
						<MousePointerClick className="text-xl inline-block" />
					</p>
				</Link>
			</div>
		</section>
	);
}

export default FeaturedRepos;

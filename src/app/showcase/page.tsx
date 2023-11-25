import { GITHUB_API_URL, GITHUB_USERNAME } from "../../../config";

import { AllFeaturedRepositories } from "@/data/HighlightLists";
import { Metadata } from "next";
import React from "react";
import RepoCard from "@/utils/RepoCard";

export const metadata: Metadata = {
	title: "ShowCase | Arun Kumar",
};
const page = async () => {
	let reposData = null;
	try {
		reposData = await Promise.allSettled(
			AllFeaturedRepositories.map(async (repoName: string) => {
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
		<>
			<section className="m-2">
				<p className="text-2xl bg-gray-100 dark:bg-inherit">
					Featured Repositories
				</p>
				<br />
				<p className="w-[15.5rem] border-b-yellow-400 border-b-4 relative -top-7"></p>
				<div className="mt-3 space-y-4">
					<RepoCard repos={reposData as GitHubRepository[]} />
				</div>
			</section>
		</>
	);
};

export default page;

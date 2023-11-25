import { GITHUB_API_URL, GITHUB_USERNAME } from "../../../config";

import { Metadata } from "next";
import React from "react";
import RepoCard from "@/utils/RepoCard";

export const metadata: Metadata = {
	title: "ShowCase | Arun Kumar",
};
const page = async () => {
	const res = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`, {
		next: {
			revalidate: 20000,
		},
	});
	let allRepos = await res.json();
	return (
		<>
			<section className="m-2">
				<p className="text-2xl bg-gray-100 dark:bg-inherit">
					Featured Repositories
				</p>
				<br />
				<p className="w-[15.5rem] border-b-yellow-400 border-b-4 relative -top-7"></p>
				<div className="mt-3 space-y-4">
					<RepoCard repos={allRepos as GitHubRepository[]} />
				</div>
			</section>
		</>
	);
};

export default page;

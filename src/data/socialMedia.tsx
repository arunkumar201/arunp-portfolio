import { EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME, TWITTER_USERNAME } from "../../config";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import React from "react";

interface ISocialMedai{
	id: number;
	lable: string;
	icon: React.ReactElement
	url: string;
}
export const socialMedia = [
	{
		id: 1,
		label: "Github",
		icon: <Github />,
		url: `https://github.com/${GITHUB_USERNAME}`,
	},
	{
		id: 2,
		label: "Linkedin",
		icon: <Linkedin />,
		url: `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`,
	},
	{
		id: 3,
		label: "Twitter",
		icon: <Twitter />,
		url: `https://twitter.com/${TWITTER_USERNAME}`,
	},
	{
		id: 4,
		label: "Mail to Arth",
		icon: <Mail />,
		url: `mailto:${EMAIL}`,
	},
];

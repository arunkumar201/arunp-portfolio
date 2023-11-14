export interface ILanguage {
	id: number;
	name: string;
	logo: any;
}

export interface ISkills {
	languages: ILanguage[];
	frameworks: ILanguage[];
	databases: ILanguage[];
	tools: ILanguage[];
}

import TailwindCSS from "../../public/assets/taiilwindcss.jpg";
import css from "../../public/assets/css-3.png";
import docker from "../../public/assets/docker.png";
import ethers from "../../public/assets/ethers.png";
import express from "../../public/assets/express-js.png";
import git from "../../public/assets/git.png";
import github from "../../public/assets/github.png";
import graphql from "../../public/assets/graphql.png";
import html from "../../public/assets/html-5.png";
import java from "../../public/assets/java.png";
import js from "../../public/assets/js.png";
import mongodb from "../../public/assets/mongo.png";
import nestjs from "../../public/assets/nestjs.svg";
import nextjs from "../../public/assets/nextjs3.png";
import nodejs from "../../public/assets/nodejs.jpg";
import python from "../../public/assets/Python.jpg";
import react from "../../public/assets/React.svg";
import redis from "../../public/assets/redis.svg";
import redux from "../../public/assets/redux.png";
import sql from "../../public/assets/sql.png";
import ts from "../../public/assets/typescript.png";
import vscode from "../../public/assets/vscode.webp";
import web3 from "../../public/assets/web3.jpeg";

export const mySkills: ISkills = {
	languages: [
		{
			id: 5,
			name: "JavaScript",
			logo: js,
		},
		{
			id: 4,
			name: "TypeScript",
			logo: ts,
		},
		{
			id: 6,
			name: "JAVA",
			logo: java,
		},
		{
			id: 7,
			name: "Python",
			logo: python,
		},
		{
			id: 1,
			name: "HTML",
			logo: html,
		},
		{
			id: 2,
			name: "CSS",
			logo: css,
		},

		{
			id: 11,
			name: "SQL",
			logo: sql,
		},
	],
	frameworks: [
		{
			id: 1,
			name: "React.Js",
			logo: react,
		},
		{
			id: 2,
			name: "Next.js",
			logo: nextjs,
		},
		{
			id: 10,
			name: "Redux",
			logo: redux,
		},
		{
			id: 3,
			name: "Node.Js",
			logo: nodejs,
		},
		{
			id: 5,
			name: "Express.js",
			logo: express,
		},
		{
			id: 6,
			name: "Nest.Js",
			logo: nestjs,
		},
		{
			id: 7,
			name: "GraphQL",
			logo: graphql,
		},
		{
			id: 8,
			name: "Web3.Js",
			logo: web3,
		},
		{
			id: 9,
			name: "Ethers.Js",
			logo: ethers,
		},

		{
			id: 4,
			name: "TailwindCSS",
			logo: TailwindCSS,
		},
	],
	databases: [
		{
			id: 1,
			name: "MongoDB",
			logo: mongodb,
		},
		{
			id: 2,
			name: "Redis",
			logo: redis,
		},
		{
			id: 3,
			name: "MySQL",
			logo: sql,
		},
	],
	tools: [
		{
			id: 1,
			name: "Git",
			logo: git,
		},
		{
			id: 2,
			name: "GitHub",
			logo: github,
		},
		{
			id: 3,
			name: "VSCode",
			logo: vscode,
		},
		{
			id: 4,
			name: "Docker",
			logo: docker,
		},
	],
};

export const keyToTitle = {
	languages: "Languages",
	frameworks: "Frameworks & Libraries",
	databases: "Databases",
	tools: "Tools",
};

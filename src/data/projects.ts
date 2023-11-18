import E from "./../../public/assets/e.jpeg";
import Food from "./../../public/assets/food.jpeg";
import { IProject } from "@/components/ProjectCard";
import nexAi from "./../../public/assets/next-ai.png";

export const projectList: IProject[] = [
	{
		id: 1,
		title: "Apna Food",
		des: "Designed and implemented a comprehensive solution enabling users to place online orders seamlessly. The system not only facilitates the ordering process but also integrates robust delivery services for a streamlined and efficient experience.",
		tech: ["ReactJs", "Tailwind", "Typescript", "Redux", "GraphQL"],
		url: "https://github.com/arunkumar201/Food-app-Front-end",
		image: Food,
	},
	{
		id: 2,
		title: "Next AI",
		des: "Developed a Personal AI Assistance system that boasts versatile capabilities, including AI image processing, AI audio analysis, text interpretation, code generation, and video synthesis.",
		tech: ["NextJs 13", "MongoDB", "Typescript", "TailwindCSS", "OpenAI"],
		url: "https://next-ai-arunp.vercel.app/",
		image: nexAi,
	},
	{
		id: 3,
		title: "E-Commerce Backend",
		des: "Designed and implemented Food App Backend Using NestJs With GraphQL.",
		tech: ["NestJS", "NodeJs", "GraphQL", "MongoDB"],
		url: "https://github.com/arunkumar201/Food-app-frontend",
		image: E,
	},
	{
		id: 4,
		title: "E-Commerce",
		des: "Designed and implemented a comprehensive solution enabling users to place online orders seamlessly. The system not only facilitates the ordering process but also integrates robust delivery services for a streamlined and efficient experience.",
		tech: ["NestJS", "NodeJs", "GraphQL", "MongoDB"],
		url: "https://github.com/arunkumar201/Food-app-Front-end",
		image: Food,
	},
];

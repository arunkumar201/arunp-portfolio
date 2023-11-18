import dynamic from "next/dynamic";

const FeaturedRepos = dynamic(() => import("@/components/Featured"), {
	ssr: true,
});
const Highlights = dynamic(() => import("@/components/Highlights"), {
	ssr: true,
});
const Intro = dynamic(() => import("@/components/Intro"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

type Props = {};

const page = (props: Props) => {
	return (
		<main className="h-full">
			<Intro />
			<Highlights />
			<FeaturedRepos />
			<Contact />
		</main>
	);
};

export default page;

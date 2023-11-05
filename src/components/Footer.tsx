import Link from "next/link";
import { socialMedia } from "@/data/socialMedia";

const Footer = () => {
	return (
		<footer className="w-full md:container  relative mt-20 justify-center flex text-center">
			<div className="flex md:flex-row flex-col items-center justify-between w-full p-4 md:gap-2 gap-8">
				<p className="order-2 md:order-1">
					© {new Date().getFullYear()} Arun Kumar
				</p>
				<div className="flex gap-3 text-lg order-1 md:order-2 ml-9">
					{socialMedia.map((social) => (
						<Link
							key={social.id}
							href={social.url}
							aria-label={social.label}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-xl hover:bg-gray-500 hover:text-blue-300 transition ease-in"
						>
							{social.icon}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

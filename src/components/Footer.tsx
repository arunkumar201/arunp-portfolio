import Link from "next/link";
import { Separator } from "./ui/separator";
import { socialMedia } from "@/data/socialMedia";

const Footer = () => {
	return (
		<footer className="w-full md:w-[95%] md:container flex justify-center text-center text-white">
			<div className="flex flex-col w-full h-full">
				<Separator className="mt-3 w-[100%] mb-2" />
				<div className="flex flex-col md:flex-row justify-between items-center mb-2">
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
			</div>
		</footer>
	);
};

export default Footer;

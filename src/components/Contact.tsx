import { BarChartBigIcon } from "lucide-react";
import { Button } from "./ui/button";
import Script from "next/script";

export default function Contact() {
	return (
		<>
			<div className="flex flex-col p-5 items-center m-auto md:px-[40px] px-4 border-2 border-blue rounded-lg mb-20">
				<h1 className="text-3xl mb-5 font-bold text-center">Get in Touch</h1>
				<h1 className="text-xl mb-5 text-sh-white-500 text-center leading-7">
					I welcome the opportunity to connect with you! Whether you have a
					project in mind, are interested in collaboration, or simply want to
					say hello, feel free to drop me a line.
					
					Open to new job opportunities, I'm eager to hear from you if my skills
					align with your needs. Don't hesitate to get in touch.
					<br /> Excited about the prospect of connecting with you!
				</h1>

				<a href="https://tally.so#tally-open=3X4LGe&tally-layout=modal&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=2000">
					<Button
						variant={"secondary"}
						className="rounded-md p-4  flex gap-2 justify-evenly items-center transition ease-in text-center">
						Connect with me
						<BarChartBigIcon  />
					</Button>
				</a>
			</div>

			<Script async src="https://tally.so/widgets/embed.js"></Script>
		</>
	);
}

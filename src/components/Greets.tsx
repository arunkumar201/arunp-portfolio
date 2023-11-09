'use client'

import { greetingList } from "@/data/greetings";
import {useState} from "react";

const Greets = () => {
	const [arrItem, setArrItem] = useState<number>(0);

	const nextItem = () => {
		setArrItem((arrItem + 1) % greetingList.length);
	};

	setTimeout(() => {
		nextItem();
	},3000);
	
	
	return (
		<div className="relative group inline-block px-2 top-3 text-start ml-2 -mb-2">
			<h2 className="text-3xl text-gray-200 font-bold animate-accordion-down border-3  hover:bg-[#45046A] underline decoration-emerald-50 mb-5 rounded-t-lg tracking-widest inline-block cursor-pointer select-none">
				{greetingList[arrItem].text}
				<span className="italic">!</span>
			</h2>
			<div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
				<span className="relative z-[100] p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-slate-200 dark:bg-slate-600 shadow-lg rounded-md">
					{greetingList[arrItem].lang}
				</span>
				<div className="w-3 h-3 -mt-2 rotate-45 bg-yellow-500"></div>
			</div>
		</div>
	);
}
export default Greets;

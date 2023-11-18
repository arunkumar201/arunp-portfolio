import dynamic from "next/dynamic";
import { highlightList } from "@/data/HighlightLists";

const HighlightPoint = dynamic(() => import("@/utils/HighlightPoint"), {
	ssr: true,
});

const Highlights = () => {
	return (
		<section className="p-4 bg-gray-200 dark:bg-gray-800 shadow border-l-4 border-x-[#1A85FF] rounded-sm dark:text-gray-50 text-gray-700 m-2">
			<h2 className="inline-block mb-3 text-lg font-bold">
				New year, New goals:
			</h2>
			<ul>
				{highlightList.map((point) => (
					<li key={point.id} className="ml-3 list-disc list-outside">
						<HighlightPoint text={point.text} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Highlights;

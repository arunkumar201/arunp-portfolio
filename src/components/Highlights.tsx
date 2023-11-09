import HighlightPoint from "@/utils/HighlightPoint";
import { highlightList } from "@/data/HighlightLists";

const Highlights = () => {
	return (
		<section className="p-4 bg-gray-200 dark:bg-gray-800 shadow border-l-4 border-x-[#1A85FF] rounded-sm dark:text-gray-50 text-gray-700 m-2">
			<h2 className="text-lg font-bold inline-block  mb-3">
				New year, New goals:
			</h2>
			<ul>
				{highlightList.map((point) => (
					<li key={point.id}
					className="list-disc list-outside ml-3"
					>
					<HighlightPoint  text={point.text} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Highlights;

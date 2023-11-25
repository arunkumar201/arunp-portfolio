const HighlightPoint = ({ text }: { text: string }) => (
	<div className="flex items-center hover:text-[#1A85FF]-500 transition ease-in cursor-default scroll-m-20 text-base  tracking-wide leading-8 ">
		{text}
	</div>
);
export default HighlightPoint;

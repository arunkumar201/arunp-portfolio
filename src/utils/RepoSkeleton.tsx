const RepoSkeleton = () => (
	<div className="flex flex-col justify-between animate-pulse p-4 bg-[#2D3748] border-2 border-[#2D3748] rounded-lg h-[9.75rem]">
		<div className="mb-2 bg-[#2D3748] h-5 rounded-sm w-3/5"></div>
		<div>
			<div className="bg-[#2D3748] h-5 mb-3 rounded-sm"></div>
			<div className="bg-[#2D3748] h-5 rounded-sm w-11/12"></div>
		</div>
		<div className="flex gap-2 mt-3">
			<div className="bg-[#2D3748] rounded-3xl px-2 w-1/4 h-4"></div>
			<div className="bg-[#2D3748] rounded-3xl px-2 w-1/4 h-4"></div>
			<div className="bg-[#2D3748] rounded-3xl px-2 w-1/4 h-4"></div>
		</div>
	</div>
);

export default RepoSkeleton;

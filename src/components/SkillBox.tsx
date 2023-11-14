import Image from "next/image";

export interface ISKillsBox{
	name: string;
	logo: string;	
}
const SkillBox = ({ name, logo }:ISKillsBox) => {
	return (
		<div className="flex items-center bg-[#610C9F]/20 border-2 border-gray-500 rounded-lg px-3 py-3 hover:shadow-lg transition-transform transform ease-in hover:scale-105 cursor-default">
			<div className="relative h-6 w-6">
				<Image
					src={logo}
					draggable={false}
					fill={true}
					className="rounded-lg object-cover"
					alt={name + " logo"}
				/>
			</div>
			<h3 className="ml-2">{name}</h3>
		</div>
	);
};

export default SkillBox;

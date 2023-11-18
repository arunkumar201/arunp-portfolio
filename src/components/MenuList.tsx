import { Button } from "./ui/button";
import { InavData } from "@/data/menu";
import Link from "next/link";
import { NavbarMenuItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const MenuList = ({ Menu }: { Menu: InavData[] }) => {
	const path = usePathname();


	return (
		<>
			{Menu.map((item: InavData, index: number) => (
				<NavbarMenuItem key={`${item}-${index}`}>
					<Button
						className={`md:w-fit w-full rounded-lg px-2 py-2 ${
							path === item.path
								? "text-primary underline-offset-4 underline decoration-yellow-200 decoration-2"
								: ""
						}`}
						size={"lg"}
						variant={"link"}
					>
						<Link
							href={item.path}
							className="text-popover-foreground text-lg tracking-tight hover:text-secondary-foreground"
						>
							{item.label}
						</Link>
					</Button>
				</NavbarMenuItem>
			))}
		</>
	);
};

export default MenuList;

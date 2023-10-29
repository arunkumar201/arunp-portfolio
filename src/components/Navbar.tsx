"use client";

import { GITHUB_URL, PORTFOLIO_NAME } from "@/constants";
import { InavData, Menu } from "@/data/menu";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";

import { Button } from "./ui/button";
import GithubLogo from "../../public/github-logo.svg";
import Image from "next/image";
import MenuList from "./MenuList";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

const MyNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<Navbar
				shouldHideOnScroll
				className="text-base md:text-lg bg-primary-foreground dark:bg-secondary md:mt-3 absolute container md:rounded-xl"
				onMenuOpenChange={setIsMenuOpen}
			>
				<NavbarContent justify="start">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="sm:hidden container -mr-3 md:mr-0 dark:text-gray-100 text-gray-600"
					/>
					<NavbarBrand>
						<div className="flex items-center gap-2">
							<Link href={GITHUB_URL} target="_blank">
								<Image
									src={GithubLogo}
									width={40}
									height={40}
									alt="github"
									className="dark:bg-gray-200 rounded-full"
								/>
							</Link>
							<span className=" text-lg font-semibold tracking-tight text-popover-foreground">
								{PORTFOLIO_NAME}
							</span>
						</div>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<MenuList Menu={Menu} />
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem>
						<ThemeToggle />
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu>
					<MenuList Menu={Menu} />
				</NavbarMenu>
			</Navbar>
		</>
	);
};

export default MyNavbar;

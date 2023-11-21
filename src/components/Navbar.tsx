"use client";

import { GITHUB_URL, PORTFOLIO_NAME } from "@/constants";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuToggle,
} from "@nextui-org/react";

import GithubLogo from "../../public/github-logo.svg";
import Image from "next/image";
import { Menu } from "@/data/menu";
import MenuList from "./MenuList";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

const MyNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<Navbar
				className="container fixed text-base md:text-lg bg-primary-foreground/60 dark:bg-secondary/60 md:mt-3 md:rounded-xl"
				onMenuOpenChange={setIsMenuOpen}
				position="sticky"
			>
				<NavbarContent justify="start">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="container -mr-3 text-gray-600 sm:hidden md:mr-0 dark:text-gray-100"
					/>
					<NavbarBrand>
						<div className="flex items-center gap-2">
							<Link href={GITHUB_URL} target="_blank" aria-label={"GITHUB"}>
								<Image
									src={GithubLogo}
									width={40}
									height={40}
									alt="github"
									className="rounded-full dark:bg-gray-200"
								/>
							</Link>
							<span className="text-lg font-semibold tracking-tight text-popover-foreground">
								<Link href="/">
								{PORTFOLIO_NAME}
								</Link>
							</span>
						</div>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent className="hidden gap-4 sm:flex" justify="center">
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

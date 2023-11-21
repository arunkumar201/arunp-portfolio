import "./globals.css";

import Footer from "@/components/Footer";
import Meta from "@/Meta";
import type { Metadata } from "next";
import MyNavbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";


const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: `${process.env.PORTFOLIO_NAME || ""} Portfolio`,
	description:
		"Craft a personalized portfolio website to showcase your skills, experiences, and projects. Share your appreciation by bestowing it with ⭐️.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className="overflow-y-scroll dark">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
			</head>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<body
					className={cn("bg-[#020617", poppins.className)}
				>
					<main className="lg:container w-full sm:m-0 bg-popover-foreground dark:bg-[#020617]  min-w-full h-full bg-[#020617] ">
						<Meta />
						<MyNavbar />
						<main className="p-3 w-full h-full bg-[#020617] mt-20 md:container">
							{children}
						</main>
						<Footer />
					</main>
				</body>
			</ThemeProvider>
		</html>
	);
}

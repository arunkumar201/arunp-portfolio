import "./globals.css";

import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Meta from "@/Meta";
import type { Metadata } from "next";
import MyNavbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en" suppressHydrationWarning>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<body className={`${inter.className} bg-[#020617]`}>
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

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "arunp-portfolio",
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
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<body className={inter.className}>{children}</body>
			</ThemeProvider>
		</html>
	);
}

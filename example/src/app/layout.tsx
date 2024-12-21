import "../../public/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next-Icons Example",
	description: "This is an example of Next-Icons. You can see how it works here."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en_US">
			<body className="bg-black">{children}</body>
		</html>
	);
}

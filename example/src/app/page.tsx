"use client";

import React from "react";

import {
	ArrowDown,
	ArrowDownSquare,
	ArrowLeft,
	ArrowLeftSquare,
	ArrowRight,
	ArrowRightSquare,
	ArrowUp,
	ArrowUpSquare,
	NextIconsProvider
} from "@deemlol/next-icons";

export default function Home() {
	return (
		<React.Fragment>
			<NextIconsProvider primaryColor="white" secondaryColor="red" set="light" size="xl" stroke="bold">
				<ArrowDown />
				<ArrowDownSquare />

				<ArrowLeft />
				<ArrowLeftSquare />

				<ArrowRight />
				<ArrowRightSquare />

				<ArrowUp />
				<ArrowUpSquare />
			</NextIconsProvider>
		</React.Fragment>
	);
}

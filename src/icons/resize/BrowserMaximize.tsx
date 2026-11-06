import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BrowserMaximize = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M4 8h8" />
			<path d="M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5" />
			<path d="M8 4v4" />
			<path d="M16 8l5 -5" />
			<path d="M21 7.5v-4.5h-4.5" />
		</svg>
	);
});

BrowserMaximize.displayName = "BrowserMaximize";
export default BrowserMaximize;

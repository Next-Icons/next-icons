import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SortDescendingLetters = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
				<path d="M19 10h-4l4 -7h-4" />
				<path d="M4 15l3 3l3 -3" />
				<path d="M7 6v12" />
			</svg>
		);
	}
);

SortDescendingLetters.displayName = "SortDescendingLetters";
export default SortDescendingLetters;

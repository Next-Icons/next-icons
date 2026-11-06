import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SortDescendingNumbers = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M4 15l3 3l3 -3" />
				<path d="M7 6v12" />
				<path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2" />
				<path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" />
			</svg>
		);
	}
);

SortDescendingNumbers.displayName = "SortDescendingNumbers";
export default SortDescendingNumbers;

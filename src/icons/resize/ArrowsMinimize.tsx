import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsMinimize = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 9l4 0l0 -4" />
			<path d="M3 3l6 6" />
			<path d="M5 15l4 0l0 4" />
			<path d="M3 21l6 -6" />
			<path d="M19 9l-4 0l0 -4" />
			<path d="M15 9l6 -6" />
			<path d="M19 15l-4 0l0 4" />
			<path d="M15 15l6 6" />
		</svg>
	);
});

ArrowsMinimize.displayName = "ArrowsMinimize";
export default ArrowsMinimize;

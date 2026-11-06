import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpNarrowWide = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m3 8 4-4 4 4" />
			<path d="M7 4v16" />
			<path d="M11 12h4" />
			<path d="M11 16h7" />
			<path d="M11 20h10" />
		</svg>
	);
});

ArrowUpNarrowWide.displayName = "ArrowUpNarrowWide";
export default ArrowUpNarrowWide;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m21 16-4 4-4-4" />
			<path d="M17 20V4" />
			<path d="m3 8 4-4 4 4" />
			<path d="M7 4v16" />
		</svg>
	);
});

ArrowUpDown.displayName = "ArrowUpDown";
export default ArrowUpDown;

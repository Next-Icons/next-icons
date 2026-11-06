import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDown01 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m3 16 4 4 4-4" />
			<path d="M7 20V4" />
			<rect height="6" ry="2" width="4" x="15" y="4" />
			<path d="M17 20v-6h-2" />
			<path d="M15 20h4" />
		</svg>
	);
});

ArrowDown01.displayName = "ArrowDown01";
export default ArrowDown01;

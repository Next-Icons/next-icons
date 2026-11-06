import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BorderCorners = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 4h2a2 2 0 0 1 2 2v2" />
			<path d="M20 16v2a2 2 0 0 1 -2 2h-2" />
			<path d="M8 20h-2a2 2 0 0 1 -2 -2v-2" />
			<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
		</svg>
	);
});

BorderCorners.displayName = "BorderCorners";
export default BorderCorners;

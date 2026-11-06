import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GraphUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 20H4V4" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4 16.5L12 9L15 12L19.5 7.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

GraphUp.displayName = "GraphUp";
export default GraphUp;

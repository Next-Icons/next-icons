import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsCross = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 4h4v4" />
			<path d="M15 9l5 -5" />
			<path d="M4 20l5 -5" />
			<path d="M16 20h4v-4" />
			<path d="M4 4l16 16" />
		</svg>
	);
});

ArrowsCross.displayName = "ArrowsCross";
export default ArrowsCross;

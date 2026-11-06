import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowForwardUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 14l4 -4l-4 -4" />
			<path d="M19 10h-11a4 4 0 1 0 0 8h1" />
		</svg>
	);
});

ArrowForwardUp.displayName = "ArrowForwardUp";
export default ArrowForwardUp;

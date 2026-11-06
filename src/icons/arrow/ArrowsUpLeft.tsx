import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsUpLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 7l-4 -4l-4 4" />
			<path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
			<path d="M7 13l-4 4l4 4" />
		</svg>
	);
});

ArrowsUpLeft.displayName = "ArrowsUpLeft";
export default ArrowsUpLeft;

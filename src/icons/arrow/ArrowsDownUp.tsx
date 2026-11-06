import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsDownUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 3l0 18" />
			<path d="M10 18l-3 3l-3 -3" />
			<path d="M7 21l0 -18" />
			<path d="M20 6l-3 -3l-3 3" />
		</svg>
	);
});

ArrowsDownUp.displayName = "ArrowsDownUp";
export default ArrowsDownUp;

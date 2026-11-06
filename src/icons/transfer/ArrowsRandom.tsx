import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsRandom = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 21h-4v-4" />
			<path d="M16 21l5 -5" />
			<path d="M6.5 9.504l-3.5 -2l2 -3.504" />
			<path d="M3 7.504l6.83 -1.87" />
			<path d="M4 16l4 -1l1 4" />
			<path d="M8 15l-3.5 6" />
			<path d="M21 5l-.5 4l-4 -.5" />
			<path d="M20.5 9l-4.5 -5.5" />
		</svg>
	);
});

ArrowsRandom.displayName = "ArrowsRandom";
export default ArrowsRandom;

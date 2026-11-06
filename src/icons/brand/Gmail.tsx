import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Gmail = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16" />
			<path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1" />
			<path d="M16 4l-4 4l-4 -4" />
			<path d="M4 6.5l8 7.5l8 -7.5" />
		</svg>
	);
});

Gmail.displayName = "Gmail";
export default Gmail;

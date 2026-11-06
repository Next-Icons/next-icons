import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Ad = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 13H6" />
			<path d="M10 15v-4a2 2 0 0 0-4 0v4" />
			<path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
			<rect height="14" rx="2" width="20" x="2" y="5" />
		</svg>
	);
});

Ad.displayName = "Ad";
export default Ad;

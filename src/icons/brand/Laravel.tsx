import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Laravel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5l0 11.5" />
			<path d="M11 18v4" />
			<path d="M7 15.5l7 -4" />
			<path d="M14 7.5v4" />
			<path d="M14 11.5l4 2.5" />
			<path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
			<path d="M7 8l4 -2.5" />
			<path d="M18 10l4 -2.5" />
		</svg>
	);
});

Laravel.displayName = "Laravel";
export default Laravel;

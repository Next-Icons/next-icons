import { forwardRef } from "react";
import type { IconProps } from "../../types";
const HomeStats = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
			<path d="M13 22l3 -3l2 2l4 -4" />
			<path d="M19 17h3v3" />
		</svg>
	);
});

HomeStats.displayName = "HomeStats";
export default HomeStats;

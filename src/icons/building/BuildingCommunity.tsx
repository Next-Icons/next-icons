import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingCommunity = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
			<path d="M13 7l0 .01" />
			<path d="M17 7l0 .01" />
			<path d="M17 11l0 .01" />
			<path d="M17 15l0 .01" />
		</svg>
	);
});

BuildingCommunity.displayName = "BuildingCommunity";
export default BuildingCommunity;

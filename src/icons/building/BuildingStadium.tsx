import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingStadium = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 12a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
			<path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
			<path d="M15 6h4v-3h-4v7" />
			<path d="M7 6h4v-3h-4v7" />
		</svg>
	);
});

BuildingStadium.displayName = "BuildingStadium";
export default BuildingStadium;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingMonument = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 18l2 -13l2 -2l2 2l2 13" />
			<path d="M5 21v-3h14v3" />
			<path d="M3 21l18 0" />
		</svg>
	);
});

BuildingMonument.displayName = "BuildingMonument";
export default BuildingMonument;

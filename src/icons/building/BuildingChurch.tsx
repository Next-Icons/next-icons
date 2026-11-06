import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingChurch = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 21l18 0" />
			<path d="M10 21v-4a2 2 0 0 1 4 0v4" />
			<path d="M10 5l4 0" />
			<path d="M12 3l0 5" />
			<path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
		</svg>
	);
});

BuildingChurch.displayName = "BuildingChurch";
export default BuildingChurch;

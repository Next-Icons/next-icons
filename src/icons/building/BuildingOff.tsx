import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 21h18" />
			<path d="M9 12h1" />
			<path d="M9 16h1" />
			<path d="M14 8h1" />
			<path d="M14 16h1" />
			<path d="M5 21v-16" />
			<path d="M7 3h10c1 0 2 1 2 2v10" />
			<path d="M19 19v2" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

BuildingOff.displayName = "BuildingOff";
export default BuildingOff;

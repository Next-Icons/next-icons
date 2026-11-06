import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingFactory2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 21v-12l5 4v-4l5 4h4" />
			<path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
			<path d="M9 17h1" />
			<path d="M14 17h1" />
		</svg>
	);
});

BuildingFactory2.displayName = "BuildingFactory2";
export default BuildingFactory2;

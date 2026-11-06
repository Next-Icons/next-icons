import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingCarousel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
			<path d="M3 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M3 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M8 22l4 -10l4 10" />
		</svg>
	);
});

BuildingCarousel.displayName = "BuildingCarousel";
export default BuildingCarousel;

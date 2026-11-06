import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingPavilion = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
			<path d="M6 21l0 -9" />
			<path d="M18 21l0 -9" />
			<path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
		</svg>
	);
});

BuildingPavilion.displayName = "BuildingPavilion";
export default BuildingPavilion;

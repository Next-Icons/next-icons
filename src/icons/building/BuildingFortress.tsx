import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingFortress = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 21h1a1 1 0 0 0 1 -1v-1a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
			<path d="M7 7v.01" />
			<path d="M7 10v.01" />
			<path d="M7 13v.01" />
			<path d="M17 7v.01" />
			<path d="M17 10v.01" />
			<path d="M17 13v.01" />
		</svg>
	);
});

BuildingFortress.displayName = "BuildingFortress";
export default BuildingFortress;

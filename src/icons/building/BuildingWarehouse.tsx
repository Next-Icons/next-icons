import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingWarehouse = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 21v-13l9 -4l9 4v13" />
			<path d="M13 13h4v8h-10v-6h6" />
			<path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
		</svg>
	);
});

BuildingWarehouse.displayName = "BuildingWarehouse";
export default BuildingWarehouse;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingBridge = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 5l0 14" />
			<path d="M18 5l0 14" />
			<path d="M2 15l20 0" />
			<path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
			<path d="M12 10l0 5" />
		</svg>
	);
});

BuildingBridge.displayName = "BuildingBridge";
export default BuildingBridge;

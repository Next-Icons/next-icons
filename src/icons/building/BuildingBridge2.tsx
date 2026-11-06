import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingBridge2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a4 4 0 0 0 -8 0v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2" />
		</svg>
	);
});

BuildingBridge2.displayName = "BuildingBridge2";
export default BuildingBridge2;

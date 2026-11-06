import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartBarOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
			<path d="M12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-10" />
			<path d="M15 11v-6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1 -1 -1v-4" />
			<path d="M4 20h14" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

ChartBarOff.displayName = "ChartBarOff";
export default ChartBarOff;

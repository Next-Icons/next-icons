import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartBarAlt3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<path d="M18 17V9" />
			<path d="M13 17V5" />
			<path d="M8 17v-3" />
		</svg>
	);
});

ChartBarAlt3.displayName = "ChartBarAlt3";
export default ChartBarAlt3;

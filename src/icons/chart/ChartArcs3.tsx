import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartArcs3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M7 12a5 5 0 1 0 5 -5" />
			<path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
		</svg>
	);
});

ChartArcs3.displayName = "ChartArcs3";
export default ChartArcs3;

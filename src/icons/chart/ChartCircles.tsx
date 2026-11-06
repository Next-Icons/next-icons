import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartCircles = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" />
			<path d="M9 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" />
		</svg>
	);
});

ChartCircles.displayName = "ChartCircles";
export default ChartCircles;

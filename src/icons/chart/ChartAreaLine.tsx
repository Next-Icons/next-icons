import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartAreaLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
			<path d="M4 12l3 -4l4 2l5 -6l4 4" />
		</svg>
	);
});

ChartAreaLine.displayName = "ChartAreaLine";
export default ChartAreaLine;

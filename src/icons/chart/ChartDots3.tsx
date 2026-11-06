import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartDots3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M3 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M9 17l5 -1.5" />
			<path d="M6.5 8.5l7.81 5.37" />
			<path d="M7 7l8 -1" />
		</svg>
	);
});

ChartDots3.displayName = "ChartDots3";
export default ChartDots3;

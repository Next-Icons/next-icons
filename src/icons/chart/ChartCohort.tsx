import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartCohort = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 9h18v-6h-18v18h6v-18" />
			<path d="M3 15h12v-12" />
		</svg>
	);
});

ChartCohort.displayName = "ChartCohort";
export default ChartCohort;

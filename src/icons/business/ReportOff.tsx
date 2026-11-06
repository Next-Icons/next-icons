import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ReportOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5.576 5.595a2 2 0 0 0 -.576 1.405v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-8a2 2 0 0 0 -2 -2h-2" />
			<path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 1 1 0 4h-2" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

ReportOff.displayName = "ReportOff";
export default ReportOff;

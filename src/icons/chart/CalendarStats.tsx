import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CalendarStats = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
			<path d="M18 14v4h4" />
			<path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M15 3v4" />
			<path d="M7 3v4" />
			<path d="M3 11h16" />
		</svg>
	);
});

CalendarStats.displayName = "CalendarStats";
export default CalendarStats;

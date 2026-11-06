import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CalendarArrowUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m14 17 4-4 4 4" />
			<path d="M16 2v3" />
			<path d="M18 21v-8" />
			<path d="M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9" />
			<path d="M3 9h18" />
			<path d="M8 2v3" />
		</svg>
	);
});

CalendarArrowUp.displayName = "CalendarArrowUp";
export default CalendarArrowUp;

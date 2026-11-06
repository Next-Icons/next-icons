import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CalendarRepeat = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
			<path d="M16 3v4" />
			<path d="M8 3v4" />
			<path d="M4 11h12" />
			<path d="M20 14l2 2h-3" />
			<path d="M20 18l2 -2" />
			<path d="M19 16a3 3 0 1 0 2 5.236" />
		</svg>
	);
});

CalendarRepeat.displayName = "CalendarRepeat";
export default CalendarRepeat;

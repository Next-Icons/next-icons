import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CalendarRotate = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 21H5C3.89543 21 3 20.1046 3 19V10H21M15 4V2M15 4V6M15 4H10.5" />
			<path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" />
			<path d="M7 2V6" />
			<path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" />
			<path d="M21.6669 16.6667C21.0481 15.097 19.635 14 17.9906 14C16.2322 14 14.7382 15.2545 14.1973 17" />
			<path d="M19.9951 16.772H21.4001C21.7314 16.772 22.0001 16.5034 22.0001 16.172V14.5498" />
			<path d="M14.3341 19.3333C14.9529 20.903 16.366 22 18.0103 22C19.7687 22 21.2628 20.7455 21.8037 19" />
			<path d="M16.0049 19.228H14.5999C14.2686 19.228 13.9999 19.4966 13.9999 19.828V21.4502" />
		</svg>
	);
});

CalendarRotate.displayName = "CalendarRotate";
export default CalendarRotate;

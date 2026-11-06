import { forwardRef } from "react";
import type { IconProps } from "../../types";
const StatsReport = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 9H6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5C18 9.88071 16.8807 11 15.5 11Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M6 6H9" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M18 18L13.5 15L11 17L6 13" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
				stroke={color}
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
});

StatsReport.displayName = "StatsReport";
export default StatsReport;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DatabaseStats = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M11 21C4 21 4 18 4 18V12" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M15 21V19" stroke={color} strokeLinecap="round" />
			<path d="M18 21V17" stroke={color} strokeLinecap="round" />
			<path d="M21 21V15" stroke={color} strokeLinecap="round" />
		</svg>
	);
});

DatabaseStats.displayName = "DatabaseStats";
export default DatabaseStats;

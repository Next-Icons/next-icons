import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartBarStacked = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 13v4" />
			<path d="M15 5v4" />
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<rect height="4" rx="1" width="9" x="7" y="13" />
			<rect height="4" rx="1" width="12" x="7" y="5" />
		</svg>
	);
});

ChartBarStacked.displayName = "ChartBarStacked";
export default ChartBarStacked;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartColumnStacked = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M11 13H7" />
				<path d="M19 9h-4" />
				<path d="M3 3v16a2 2 0 0 0 2 2h16" />
				<rect height="12" rx="1" width="4" x="15" y="5" />
				<rect height="9" rx="1" width="4" x="7" y="8" />
			</svg>
		);
	}
);

ChartColumnStacked.displayName = "ChartColumnStacked";
export default ChartColumnStacked;

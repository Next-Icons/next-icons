import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartBarDecreasing = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 3v16a2 2 0 0 0 2 2h16" />
				<path d="M7 11h8" />
				<path d="M7 16h3" />
				<path d="M7 6h12" />
			</svg>
		);
	}
);

ChartBarDecreasing.displayName = "ChartBarDecreasing";
export default ChartBarDecreasing;

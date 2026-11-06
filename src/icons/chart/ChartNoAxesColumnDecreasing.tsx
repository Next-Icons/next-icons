import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartNoAxesColumnDecreasing = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M5 21V3" />
				<path d="M12 21V9" />
				<path d="M19 21v-6" />
			</svg>
		);
	}
);

ChartNoAxesColumnDecreasing.displayName = "ChartNoAxesColumnDecreasing";
export default ChartNoAxesColumnDecreasing;

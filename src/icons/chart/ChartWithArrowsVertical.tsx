import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartWithArrowsVertical = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M18 21v-14" />
				<path d="M9 15l3 -3l3 3" />
				<path d="M15 10l3 -3l3 3" />
				<path d="M3 21l18 0" />
				<path d="M12 21l0 -9" />
				<path d="M3 6l3 -3l3 3" />
				<path d="M6 21v-18" />
			</svg>
		);
	}
);

ChartWithArrowsVertical.displayName = "ChartWithArrowsVertical";
export default ChartWithArrowsVertical;

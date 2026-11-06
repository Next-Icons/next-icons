import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartCandlestickAlt = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M9 5v4" />
				<rect height="6" rx="1" width="4" x="7" y="9" />
				<path d="M9 15v2" />
				<path d="M17 3v2" />
				<rect height="8" rx="1" width="4" x="15" y="5" />
				<path d="M17 13v3" />
				<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			</svg>
		);
	}
);

ChartCandlestickAlt.displayName = "ChartCandlestickAlt";
export default ChartCandlestickAlt;

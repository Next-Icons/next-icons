import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowSharpTurnLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805" />
				<path d="M11 16h-5v-5" />
			</svg>
		);
	}
);

ArrowSharpTurnLeft.displayName = "ArrowSharpTurnLeft";
export default ArrowSharpTurnLeft;

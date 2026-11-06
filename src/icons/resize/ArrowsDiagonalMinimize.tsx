import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsDiagonalMinimize = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M6 10h4v-4" />
				<path d="M4 4l6 6" />
				<path d="M18 14h-4v4" />
				<path d="M14 14l6 6" />
			</svg>
		);
	}
);

ArrowsDiagonalMinimize.displayName = "ArrowsDiagonalMinimize";
export default ArrowsDiagonalMinimize;

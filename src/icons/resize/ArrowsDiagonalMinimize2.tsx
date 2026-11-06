import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsDiagonalMinimize2 = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M18 10h-4v-4" />
				<path d="M20 4l-6 6" />
				<path d="M6 14h4v4" />
				<path d="M10 14l-6 6" />
			</svg>
		);
	}
);

ArrowsDiagonalMinimize2.displayName = "ArrowsDiagonalMinimize2";
export default ArrowsDiagonalMinimize2;

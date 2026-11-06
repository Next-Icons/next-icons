import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowForwardUpDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M11 14l4 -4l-4 -4" />
				<path d="M16 14l4 -4l-4 -4" />
				<path d="M15 10h-7a4 4 0 1 0 0 8h1" />
			</svg>
		);
	}
);

ArrowForwardUpDouble.displayName = "ArrowForwardUpDouble";
export default ArrowForwardUpDouble;

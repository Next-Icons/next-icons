import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerDownLeftDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M19 5v6a3 3 0 0 1 -3 3h-7" />
				<path d="M13 10l-4 4l4 4m-5 -8l-4 4l4 4" />
			</svg>
		);
	}
);

CornerDownLeftDouble.displayName = "CornerDownLeftDouble";
export default CornerDownLeftDouble;

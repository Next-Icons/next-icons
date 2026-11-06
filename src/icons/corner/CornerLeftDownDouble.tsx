import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerLeftDownDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M18 4h-6a3 3 0 0 0 -3 3v7" />
				<path d="M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" />
			</svg>
		);
	}
);

CornerLeftDownDouble.displayName = "CornerLeftDownDouble";
export default CornerLeftDownDouble;

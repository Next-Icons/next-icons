import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerRightDownDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M5 4h6a3 3 0 0 1 3 3v7" />
				<path d="M10 10l4 4l4 -4m-8 5l4 4l4 -4" />
			</svg>
		);
	}
);

CornerRightDownDouble.displayName = "CornerRightDownDouble";
export default CornerRightDownDouble;

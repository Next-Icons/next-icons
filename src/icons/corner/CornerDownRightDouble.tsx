import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerDownRightDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M4 5v6a3 3 0 0 0 3 3h7" />
				<path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" />
			</svg>
		);
	}
);

CornerDownRightDouble.displayName = "CornerDownRightDouble";
export default CornerDownRightDouble;

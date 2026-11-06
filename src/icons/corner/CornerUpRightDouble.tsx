import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerUpRightDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M4 18v-6a3 3 0 0 1 3 -3h7" />
				<path d="M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4" />
			</svg>
		);
	}
);

CornerUpRightDouble.displayName = "CornerUpRightDouble";
export default CornerUpRightDouble;

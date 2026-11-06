import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowSharpTurnRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
				<path d="M13 16h5v-5" />
			</svg>
		);
	}
);

ArrowSharpTurnRight.displayName = "ArrowSharpTurnRight";
export default ArrowSharpTurnRight;

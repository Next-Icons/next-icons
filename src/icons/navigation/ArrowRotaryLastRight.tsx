import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRotaryLastRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M6 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M9 15v6" />
				<path d="M11.5 9.5l6.5 -6.5" />
				<path d="M13 3h5v5" />
			</svg>
		);
	}
);

ArrowRotaryLastRight.displayName = "ArrowRotaryLastRight";
export default ArrowRotaryLastRight;

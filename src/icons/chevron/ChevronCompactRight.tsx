import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChevronCompactRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M11 4l3 8l-3 8" />
			</svg>
		);
	}
);

ChevronCompactRight.displayName = "ChevronCompactRight";
export default ChevronCompactRight;

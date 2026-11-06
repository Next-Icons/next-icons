import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowSeparateVertical = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M17 8L12 3L7 8" />
				<path d="M17 16L12 21L7 16" />
			</svg>
		);
	}
);

ArrowSeparateVertical.displayName = "ArrowSeparateVertical";
export default ArrowSeparateVertical;

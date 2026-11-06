import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsCollapseFull = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M19 15h-4m0 0v4m0-4 4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4 4-4M5 15h4m0 0v4m0-4-4 4" />
			</svg>
		);
	}
);

ArrowsCollapseFull.displayName = "ArrowsCollapseFull";
export default ArrowsCollapseFull;

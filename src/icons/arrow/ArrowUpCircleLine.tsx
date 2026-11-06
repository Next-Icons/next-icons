import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpCircleLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="12" cy="12" r="9" />
			<path d="M9 12h6m0 0-3 3m3-3-3-3" />
		</svg>
	);
});

ArrowUpCircleLine.displayName = "ArrowUpCircleLine";
export default ArrowUpCircleLine;

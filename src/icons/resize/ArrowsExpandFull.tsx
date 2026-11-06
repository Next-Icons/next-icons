import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsExpandFull = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 19h4m0 0v-4m0 4-4-4M9 5H5m0 0v4m0-4 4 4m6-4h4m0 0v4m0-4-4 4M9 19H5m0 0v-4m0 4 4-4" />
		</svg>
	);
});

ArrowsExpandFull.displayName = "ArrowsExpandFull";
export default ArrowsExpandFull;

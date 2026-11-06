import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowIteration = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
			<path d="M3 16h18" />
			<path d="M18 13l3 3l-3 3" />
		</svg>
	);
});

ArrowIteration.displayName = "ArrowIteration";
export default ArrowIteration;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBarToUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 10l0 10" />
			<path d="M12 10l4 4" />
			<path d="M12 10l-4 4" />
			<path d="M4 4l16 0" />
		</svg>
	);
});

ArrowBarToUp.displayName = "ArrowBarToUp";
export default ArrowBarToUp;

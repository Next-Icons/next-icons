import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRampRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 3l0 8.707" />
			<path d="M11 7l-4 -4l-4 4" />
			<path d="M17 14l4 -4l-4 -4" />
			<path d="M7 21a11 11 0 0 1 11 -11h3" />
		</svg>
	);
});

ArrowRampRight.displayName = "ArrowRampRight";
export default ArrowRampRight;

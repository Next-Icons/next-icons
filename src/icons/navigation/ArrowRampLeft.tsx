import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRampLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 3l0 8.707" />
			<path d="M13 7l4 -4l4 4" />
			<path d="M7 14l-4 -4l4 -4" />
			<path d="M17 21a11 11 0 0 0 -11 -11h-3" />
		</svg>
	);
});

ArrowRampLeft.displayName = "ArrowRampLeft";
export default ArrowRampLeft;

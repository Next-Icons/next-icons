import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRampLeft3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 3v6" />
			<path d="M8 16l-4 -4l4 -4" />
			<path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
		</svg>
	);
});

ArrowRampLeft3.displayName = "ArrowRampLeft3";
export default ArrowRampLeft3;

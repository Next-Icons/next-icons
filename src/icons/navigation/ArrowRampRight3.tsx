import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRampRight3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 3v6" />
			<path d="M16 16l4 -4l-4 -4" />
			<path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
		</svg>
	);
});

ArrowRampRight3.displayName = "ArrowRampRight3";
export default ArrowRampRight3;

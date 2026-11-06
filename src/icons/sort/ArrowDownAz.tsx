import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownAz = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m3 16 4 4 4-4" />
			<path d="M7 20V4" />
			<path d="M20 8h-5" />
			<path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
			<path d="M15 14h5l-5 6h5" />
		</svg>
	);
});

ArrowDownAz.displayName = "ArrowDownAz";
export default ArrowDownAz;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRightRhombus = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 12h13" />
			<path d="M18 9l3 3l-3 3" />
			<path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5l-2.5 -2.5" />
		</svg>
	);
});

ArrowRightRhombus.displayName = "ArrowRightRhombus";
export default ArrowRightRhombus;

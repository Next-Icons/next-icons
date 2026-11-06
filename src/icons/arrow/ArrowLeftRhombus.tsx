import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftRhombus = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 12h-13" />
			<path d="M6 9l-3 3l3 3" />
			<path d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5" />
		</svg>
	);
});

ArrowLeftRhombus.displayName = "ArrowLeftRhombus";
export default ArrowLeftRhombus;

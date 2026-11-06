import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsDoubleSeNw = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 10l11 11" />
			<path d="M14 17v4h-4" />
			<path d="M14 3h-4v4" />
			<path d="M21 14l-11 -11" />
		</svg>
	);
});

ArrowsDoubleSeNw.displayName = "ArrowsDoubleSeNw";
export default ArrowsDoubleSeNw;

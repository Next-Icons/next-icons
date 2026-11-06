import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsDoubleNeSw = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 14l11 -11" />
			<path d="M10 3h4v4" />
			<path d="M10 17v4h4" />
			<path d="M21 10l-11 11" />
		</svg>
	);
});

ArrowsDoubleNeSw.displayName = "ArrowsDoubleNeSw";
export default ArrowsDoubleNeSw;

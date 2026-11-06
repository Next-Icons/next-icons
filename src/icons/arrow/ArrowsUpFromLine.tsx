import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsUpFromLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m4 6 3-3 3 3" />
			<path d="M7 17V3" />
			<path d="m14 6 3-3 3 3" />
			<path d="M17 17V3" />
			<path d="M4 21h16" />
		</svg>
	);
});

ArrowsUpFromLine.displayName = "ArrowsUpFromLine";
export default ArrowsUpFromLine;

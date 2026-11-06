import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsRightLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 7l-18 0" />
			<path d="M18 10l3 -3l-3 -3" />
			<path d="M6 20l-3 -3l3 -3" />
			<path d="M3 17l18 0" />
		</svg>
	);
});

ArrowsRightLeft.displayName = "ArrowsRightLeft";
export default ArrowsRightLeft;

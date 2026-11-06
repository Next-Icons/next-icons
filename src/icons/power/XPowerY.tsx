import { forwardRef } from "react";
import type { IconProps } from "../../types";
const XPowerY = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 3l3 5.063" />
			<path d="M5 12l6 6" />
			<path d="M5 18l6 -6" />
			<path d="M21 3l-4.8 9" />
		</svg>
	);
});

XPowerY.displayName = "XPowerY";
export default XPowerY;

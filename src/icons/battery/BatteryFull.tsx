import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BatteryFull = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 10v4" />
			<path d="M14 10v4" />
			<path d="M22 14v-4" />
			<path d="M6 10v4" />
			<rect height="12" rx="2" width="16" x="2" y="6" />
		</svg>
	);
});

BatteryFull.displayName = "BatteryFull";
export default BatteryFull;

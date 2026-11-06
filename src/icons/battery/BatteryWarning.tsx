import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BatteryWarning = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 17h.01" />
			<path d="M10 7v6" />
			<path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
			<path d="M22 14v-4" />
			<path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
		</svg>
	);
});

BatteryWarning.displayName = "BatteryWarning";
export default BatteryWarning;

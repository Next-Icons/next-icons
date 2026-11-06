import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BatteryAutomotive = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -10" />
			<path d="M6 5v-2" />
			<path d="M18 3v2" />
			<path d="M6.5 12h3" />
			<path d="M14.5 12h3" />
			<path d="M16 10.5v3" />
		</svg>
	);
});

BatteryAutomotive.displayName = "BatteryAutomotive";
export default BatteryAutomotive;

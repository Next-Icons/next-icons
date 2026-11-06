import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircuitBattery = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 12h4" />
			<path d="M18 12h4" />
			<path d="M18 5v14" />
			<path d="M14 9v6" />
			<path d="M10 5v14" />
			<path d="M6 9v6" />
		</svg>
	);
});

CircuitBattery.displayName = "CircuitBattery";
export default CircuitBattery;

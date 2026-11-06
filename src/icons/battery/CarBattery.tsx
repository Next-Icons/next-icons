import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CarBattery = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 13h4" />
			<path d="M16 15v-4" />
			<path d="M18 5v2" />
			<path d="M6 13h4" />
			<path d="M6 5v2" />
			<rect height="12" rx="2" width="20" x="2" y="7" />
		</svg>
	);
});

CarBattery.displayName = "CarBattery";
export default CarBattery;

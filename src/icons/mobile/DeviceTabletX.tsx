import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletX = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			<path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
		</svg>
	);
});

DeviceTabletX.displayName = "DeviceTabletX";
export default DeviceTabletX;

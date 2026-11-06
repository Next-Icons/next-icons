import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
			<path d="M12.906 16.576a1 1 0 1 0 -.906 1.424" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
		</svg>
	);
});

DeviceTabletUp.displayName = "DeviceTabletUp";
export default DeviceTabletUp;

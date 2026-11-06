import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-15" />
			<path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceTabletOff.displayName = "DeviceTabletOff";
export default DeviceTabletOff;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceWatchOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132a2.99 2.99 0 0 1 -2.11 .868h-6a3 3 0 0 1 -3 -3v-6c0 -.817 .327 -1.559 .857 -2.1" />
			<path d="M9 18v3h6v-3" />
			<path d="M9 5v-2h6v3" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceWatchOff.displayName = "DeviceWatchOff";
export default DeviceWatchOff;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceWatchCheck = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v5.5" />
			<path d="M9 18v3h2.5" />
			<path d="M9 6v-3h6v3" />
			<path d="M15 19l2 2l4 -4" />
		</svg>
	);
});

DeviceWatchCheck.displayName = "DeviceWatchCheck";
export default DeviceWatchCheck;

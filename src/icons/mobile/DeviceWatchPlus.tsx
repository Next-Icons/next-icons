import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceWatchPlus = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
			<path d="M16 19h6" />
			<path d="M19 16v6" />
			<path d="M9 18v3h3.5" />
			<path d="M9 6v-3h6v3" />
		</svg>
	);
});

DeviceWatchPlus.displayName = "DeviceWatchPlus";
export default DeviceWatchPlus;

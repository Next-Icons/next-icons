import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceWatchSearch = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v2" />
			<path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M20.2 20.2l1.8 1.8" />
			<path d="M9 18v3h3" />
			<path d="M9 6v-3h6v3" />
		</svg>
	);
});

DeviceWatchSearch.displayName = "DeviceWatchSearch";
export default DeviceWatchSearch;

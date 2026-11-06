import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceImacSearch = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 17h-7a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
			<path d="M3 13h10" />
			<path d="M8 21h4" />
			<path d="M10 17l-.5 4" />
			<path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M20.2 20.2l1.8 1.8" />
		</svg>
	);
});

DeviceImacSearch.displayName = "DeviceImacSearch";
export default DeviceImacSearch;

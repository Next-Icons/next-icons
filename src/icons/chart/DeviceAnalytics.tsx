import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceAnalytics = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
			<path d="M7 20l10 0" />
			<path d="M9 16l0 4" />
			<path d="M15 16l0 4" />
			<path d="M8 12l3 -3l2 2l3 -3" />
		</svg>
	);
});

DeviceAnalytics.displayName = "DeviceAnalytics";
export default DeviceAnalytics;

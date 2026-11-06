import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceImacPin = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 17h-8a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
			<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
			<path d="M19 18v.01" />
			<path d="M3 13h11" />
			<path d="M8 21h4.5" />
			<path d="M10 17l-.5 4" />
		</svg>
	);
});

DeviceImacPin.displayName = "DeviceImacPin";
export default DeviceImacPin;

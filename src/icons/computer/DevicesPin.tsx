import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DevicesPin = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 14v-5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2" />
			<path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" />
			<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
			<path d="M19 18v.01" />
			<path d="M16 9h2" />
		</svg>
	);
});

DevicesPin.displayName = "DevicesPin";
export default DevicesPin;

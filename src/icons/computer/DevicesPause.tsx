import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DevicesPause = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
			<path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
			<path d="M17 17v5" />
			<path d="M21 17v5" />
			<path d="M16 9h2" />
		</svg>
	);
});

DevicesPause.displayName = "DevicesPause";
export default DevicesPause;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceImac = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12" />
			<path d="M3 13h18" />
			<path d="M8 21h8" />
			<path d="M10 17l-.5 4" />
			<path d="M14 17l.5 4" />
		</svg>
	);
});

DeviceImac.displayName = "DeviceImac";
export default DeviceImac;

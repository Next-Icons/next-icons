import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceGamepad = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" />
			<path d="M6 12h4m-2 -2v4" />
			<path d="M15 11l0 .01" />
			<path d="M18 13l0 .01" />
		</svg>
	);
});

DeviceGamepad.displayName = "DeviceGamepad";
export default DeviceGamepad;

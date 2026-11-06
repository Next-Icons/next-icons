import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceDesktopUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			<path d="M7 20h5" />
			<path d="M9 16v4" />
		</svg>
	);
});

DeviceDesktopUp.displayName = "DeviceDesktopUp";
export default DeviceDesktopUp;

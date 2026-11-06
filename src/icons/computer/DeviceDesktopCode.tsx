import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceDesktopCode = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
			<path d="M7 20h4" />
			<path d="M9 16v4" />
			<path d="M20 21l2 -2l-2 -2" />
			<path d="M17 17l-2 2l2 2" />
		</svg>
	);
});

DeviceDesktopCode.displayName = "DeviceDesktopCode";
export default DeviceDesktopCode;

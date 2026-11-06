import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceDesktopShare = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M7 20h5.5" />
				<path d="M9 16v4" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
			</svg>
		);
	}
);

DeviceDesktopShare.displayName = "DeviceDesktopShare";
export default DeviceDesktopShare;

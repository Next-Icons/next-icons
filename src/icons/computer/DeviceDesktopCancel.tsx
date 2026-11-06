import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceDesktopCancel = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
				<path d="M7 20h5" />
				<path d="M9 16v4" />
				<path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
			</svg>
		);
	}
);

DeviceDesktopCancel.displayName = "DeviceDesktopCancel";
export default DeviceDesktopCancel;

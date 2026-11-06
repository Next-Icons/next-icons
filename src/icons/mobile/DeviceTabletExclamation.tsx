import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletExclamation = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
				<path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
			</svg>
		);
	}
);

DeviceTabletExclamation.displayName = "DeviceTabletExclamation";
export default DeviceTabletExclamation;

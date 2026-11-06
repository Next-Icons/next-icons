import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceDesktopMinus = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10" />
				<path d="M7 20h5" />
				<path d="M9 16v4" />
				<path d="M16 19h6" />
			</svg>
		);
	}
);

DeviceDesktopMinus.displayName = "DeviceDesktopMinus";
export default DeviceDesktopMinus;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceComputerCamera2 = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M17 14h-10a4 4 0 0 1 -4 -4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4a4 4 0 0 1 -4 4" />
				<path d="M15 14h-6v4h6v-4" />
				<path d="M17 18h-10" />
				<path d="M12 10.02v.01" />
			</svg>
		);
	}
);

DeviceComputerCamera2.displayName = "DeviceComputerCamera2";
export default DeviceComputerCamera2;

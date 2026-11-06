import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceComputerCamera = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M5 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486" />
			</svg>
		);
	}
);

DeviceComputerCamera.displayName = "DeviceComputerCamera";
export default DeviceComputerCamera;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobileVibration = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14" />
				<path d="M8 4l2 0" />
				<path d="M9 17l0 .01" />
				<path d="M21 6l-2 3l2 3l-2 3l2 3" />
			</svg>
		);
	}
);

DeviceMobileVibration.displayName = "DeviceMobileVibration";
export default DeviceMobileVibration;

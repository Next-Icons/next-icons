import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadHorizontalPin = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
				<path d="M9 17h3" />
				<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
				<path d="M19 18v.01" />
			</svg>
		);
	}
);

DeviceIpadHorizontalPin.displayName = "DeviceIpadHorizontalPin";
export default DeviceIpadHorizontalPin;

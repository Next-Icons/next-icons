import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadHorizontalPause = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
				<path d="M9 17h4" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
			</svg>
		);
	}
);

DeviceIpadHorizontalPause.displayName = "DeviceIpadHorizontalPause";
export default DeviceIpadHorizontalPause;

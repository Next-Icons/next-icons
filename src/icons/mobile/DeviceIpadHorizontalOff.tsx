import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadHorizontalOff = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M8 4h12a2 2 0 0 1 2 2v12m-2 2h-16a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
				<path d="M9 17h6" />
				<path d="M3 3l18 18" />
			</svg>
		);
	}
);

DeviceIpadHorizontalOff.displayName = "DeviceIpadHorizontalOff";
export default DeviceIpadHorizontalOff;

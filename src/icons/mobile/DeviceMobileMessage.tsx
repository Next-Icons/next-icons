import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobileMessage = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M11 3h10v8h-3l-4 2v-2h-3l0 -8" />
				<path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
				<path d="M10 18v.01" />
			</svg>
		);
	}
);

DeviceMobileMessage.displayName = "DeviceMobileMessage";
export default DeviceMobileMessage;

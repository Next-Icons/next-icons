import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobileRotated = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -8" />
				<path d="M20 11v2" />
				<path d="M7 12h-.01" />
			</svg>
		);
	}
);

DeviceMobileRotated.displayName = "DeviceMobileRotated";
export default DeviceMobileRotated;

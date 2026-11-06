import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadHorizontalExclamation = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M15 20h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
				<path d="M9 17h6" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
			</svg>
		);
	}
);

DeviceIpadHorizontalExclamation.displayName = "DeviceIpadHorizontalExclamation";
export default DeviceIpadHorizontalExclamation;

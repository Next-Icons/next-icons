import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadHorizontalPlus = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" />
				<path d="M9 17h3.5" />
				<path d="M16 19h6" />
				<path d="M19 16v6" />
			</svg>
		);
	}
);

DeviceIpadHorizontalPlus.displayName = "DeviceIpadHorizontalPlus";
export default DeviceIpadHorizontalPlus;

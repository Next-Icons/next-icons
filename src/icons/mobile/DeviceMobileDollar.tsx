import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobileDollar = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M13 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5" />
				<path d="M11 4h2" />
				<path d="M12 17v.01" />
				<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M19 21v1m0 -8v1" />
			</svg>
		);
	}
);

DeviceMobileDollar.displayName = "DeviceMobileDollar";
export default DeviceMobileDollar;

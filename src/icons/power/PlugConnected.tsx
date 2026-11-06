import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PlugConnected = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5" />
			<path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5" />
			<path d="M3 21l2.5 -2.5" />
			<path d="M18.5 5.5l2.5 -2.5" />
			<path d="M10 11l-2 2" />
			<path d="M13 14l-2 2" />
		</svg>
	);
});

PlugConnected.displayName = "PlugConnected";
export default PlugConnected;

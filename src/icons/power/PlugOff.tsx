import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PlugOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159" />
			<path d="M4 20l3.5 -3.5" />
			<path d="M15 4l-3.5 3.5" />
			<path d="M20 9l-3.5 3.5" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

PlugOff.displayName = "PlugOff";
export default PlugOff;

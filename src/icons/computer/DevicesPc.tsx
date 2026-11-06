import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DevicesPc = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 5h6v14h-6l0 -14" />
			<path d="M12 9h10v7h-10l0 -7" />
			<path d="M14 19h6" />
			<path d="M17 16v3" />
			<path d="M6 13v.01" />
			<path d="M6 16v.01" />
		</svg>
	);
});

DevicesPc.displayName = "DevicesPc";
export default DevicesPc;

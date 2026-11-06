import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceSim = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1" />
			<path d="M9 11h3v6" />
			<path d="M15 17v.01" />
			<path d="M15 14v.01" />
			<path d="M15 11v.01" />
			<path d="M9 14v.01" />
			<path d="M9 17v.01" />
		</svg>
	);
});

DeviceSim.displayName = "DeviceSim";
export default DeviceSim;

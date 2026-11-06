import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingTunnel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2" />
			<path d="M8 21v-9a4 4 0 1 1 8 0v9" />
			<path d="M3 17h4" />
			<path d="M17 17h4" />
			<path d="M21 12h-4" />
			<path d="M7 12h-4" />
			<path d="M12 3v5" />
			<path d="M6 6l3 3" />
			<path d="M15 9l3 -3l-3 3" />
		</svg>
	);
});

BuildingTunnel.displayName = "BuildingTunnel";
export default BuildingTunnel;

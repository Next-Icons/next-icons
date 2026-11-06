import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SidebarCollapse = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 19C21 20.1046 20.1046 21 19 21Z" />
			<path d="M7.25 10L5.5 12L7.25 14" />
			<path d="M9.5 21V3" />
		</svg>
	);
});

SidebarCollapse.displayName = "SidebarCollapse";
export default SidebarCollapse;

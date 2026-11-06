import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TabletSmartphone = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="14" rx="2" width="10" x="3" y="8" />
			<path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
			<path d="M8 18h.01" />
		</svg>
	);
});

TabletSmartphone.displayName = "TabletSmartphone";
export default TabletSmartphone;

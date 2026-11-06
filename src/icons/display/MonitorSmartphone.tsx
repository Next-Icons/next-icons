import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MonitorSmartphone = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
			<path d="M10 19v-3.96 3.15" />
			<path d="M7 19h5" />
			<rect height="10" rx="2" width="6" x="16" y="12" />
		</svg>
	);
});

MonitorSmartphone.displayName = "MonitorSmartphone";
export default MonitorSmartphone;

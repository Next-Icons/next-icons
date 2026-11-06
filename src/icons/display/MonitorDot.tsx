import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MonitorDot = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 17v4" />
			<path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" />
			<path d="M8 21h8" />
			<circle cx="19" cy="6" r="3" />
		</svg>
	);
});

MonitorDot.displayName = "MonitorDot";
export default MonitorDot;

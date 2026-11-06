import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MonitorUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m9 10 3-3 3 3" />
			<path d="M12 13V7" />
			<rect height="14" rx="2" width="20" x="2" y="3" />
			<path d="M12 17v4" />
			<path d="M8 21h8" />
		</svg>
	);
});

MonitorUp.displayName = "MonitorUp";
export default MonitorUp;

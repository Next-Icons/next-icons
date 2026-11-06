import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MonitorSpeaker = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5.5 20H8" />
			<path d="M17 9h.01" />
			<rect height="16" rx="2" width="10" x="12" y="4" />
			<path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
			<circle cx="17" cy="15" r="1" />
		</svg>
	);
});

MonitorSpeaker.displayName = "MonitorSpeaker";
export default MonitorSpeaker;

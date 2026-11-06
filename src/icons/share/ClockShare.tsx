import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ClockShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
			<path d="M12 7v5l2 2" />
		</svg>
	);
});

ClockShare.displayName = "ClockShare";
export default ClockShare;

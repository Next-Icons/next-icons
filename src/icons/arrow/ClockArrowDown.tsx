import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ClockArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6v6l2 1" />
			<path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
			<path d="m14 18 4 4 4-4" />
			<path d="M18 14v8" />
		</svg>
	);
});

ClockArrowDown.displayName = "ClockArrowDown";
export default ClockArrowDown;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ClockRotateRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6L12 12L18 12" />
			<path d="M21.8883 10.5C21.1645 5.68874 17.013 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16" />
			<path d="M17 16H21.4C21.7314 16 22 16.2686 22 16.6V21" />
		</svg>
	);
});

ClockRotateRight.displayName = "ClockRotateRight";
export default ClockRotateRight;

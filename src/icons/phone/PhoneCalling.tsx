import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PhoneCalling = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
			<path d="M15 7l0 .01" />
			<path d="M18 7l0 .01" />
			<path d="M21 7l0 .01" />
		</svg>
	);
});

PhoneCalling.displayName = "PhoneCalling";
export default PhoneCalling;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBadgeDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 13v-6l-5 4l-5 -4v6l5 4l5 -4" />
		</svg>
	);
});

ArrowBadgeDown.displayName = "ArrowBadgeDown";
export default ArrowBadgeDown;

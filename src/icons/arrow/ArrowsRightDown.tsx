import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsRightDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 17l4 4l4 -4" />
			<path d="M7 21v-11a3 3 0 0 1 3 -3h11" />
			<path d="M17 11l4 -4l-4 -4" />
		</svg>
	);
});

ArrowsRightDown.displayName = "ArrowsRightDown";
export default ArrowsRightDown;

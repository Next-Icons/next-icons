import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 17l-18 0" />
			<path d="M18 4l3 3l-3 3" />
			<path d="M18 20l3 -3l-3 -3" />
			<path d="M21 7l-18 0" />
		</svg>
	);
});

ArrowsRight.displayName = "ArrowsRight";
export default ArrowsRight;

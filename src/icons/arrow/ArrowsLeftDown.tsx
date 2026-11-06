import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsLeftDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 3l-4 4l4 4" />
			<path d="M3 7h11a3 3 0 0 1 3 3v11" />
			<path d="M13 17l4 4l4 -4" />
		</svg>
	);
});

ArrowsLeftDown.displayName = "ArrowsLeftDown";
export default ArrowsLeftDown;

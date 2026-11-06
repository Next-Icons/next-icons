import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUturnDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3" />
		</svg>
	);
});

ArrowUturnDown.displayName = "ArrowUturnDown";
export default ArrowUturnDown;

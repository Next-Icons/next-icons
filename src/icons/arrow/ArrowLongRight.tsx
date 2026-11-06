import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLongRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
		</svg>
	);
});

ArrowLongRight.displayName = "ArrowLongRight";
export default ArrowLongRight;

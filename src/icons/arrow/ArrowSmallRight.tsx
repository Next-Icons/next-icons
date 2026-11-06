import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowSmallRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
		</svg>
	);
});

ArrowSmallRight.displayName = "ArrowSmallRight";
export default ArrowSmallRight;

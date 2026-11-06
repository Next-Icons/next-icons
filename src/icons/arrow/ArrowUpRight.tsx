import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 7h10v10" />
			<path d="M7 17 17 7" />
		</svg>
	);
});

ArrowUpRight.displayName = "ArrowUpRight";
export default ArrowUpRight;

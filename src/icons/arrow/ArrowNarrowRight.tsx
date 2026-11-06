import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowNarrowRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 12l14 0" />
			<path d="M15 16l4 -4" />
			<path d="M15 8l4 4" />
		</svg>
	);
});

ArrowNarrowRight.displayName = "ArrowNarrowRight";
export default ArrowNarrowRight;

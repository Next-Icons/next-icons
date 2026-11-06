import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleArrowRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="12" cy="12" r="10" />
			<path d="m12 16 4-4-4-4" />
			<path d="M8 12h8" />
		</svg>
	);
});

CircleArrowRight.displayName = "CircleArrowRight";
export default CircleArrowRight;

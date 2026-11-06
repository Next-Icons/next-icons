import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowRightUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 10.5L15.5 7L12 10.5" />
			<path d="M15.5 7V13C15.5 15.2091 13.7091 17 11.5 17H4.5" />
		</svg>
	);
});

LongArrowRightUp.displayName = "LongArrowRightUp";
export default LongArrowRightUp;

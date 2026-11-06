import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowLeftUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4.5 10.5L8 7L11.5 10.5" />
			<path d="M8 7V13C8 15.2091 9.79086 17 12 17H19" />
		</svg>
	);
});

LongArrowLeftUp.displayName = "LongArrowLeftUp";
export default LongArrowLeftUp;

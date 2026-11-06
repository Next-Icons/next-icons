import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowLeftDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4.5 13.5L8 17L11.5 13.5" />
			<path d="M8 17V11C8 8.79086 9.79086 7 12 7H19" />
		</svg>
	);
});

LongArrowLeftDown.displayName = "LongArrowLeftDown";
export default LongArrowLeftDown;

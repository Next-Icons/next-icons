import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerRightUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m10 9 5-5 5 5" />
			<path d="M4 20h7a4 4 0 0 0 4-4V4" />
		</svg>
	);
});

CornerRightUp.displayName = "CornerRightUp";
export default CornerRightUp;

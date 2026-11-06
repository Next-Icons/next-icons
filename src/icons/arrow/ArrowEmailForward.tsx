import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowEmailForward = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M22 10L8 10C0 10 0 21 8 21M22 10L15 3M22 10L15 17" />
		</svg>
	);
});

ArrowEmailForward.displayName = "ArrowEmailForward";
export default ArrowEmailForward;

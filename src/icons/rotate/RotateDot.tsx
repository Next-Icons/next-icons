import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RotateDot = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
			<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		</svg>
	);
});

RotateDot.displayName = "RotateDot";
export default RotateDot;

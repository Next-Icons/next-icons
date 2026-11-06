import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerUpLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
			<path d="M9 14 4 9l5-5" />
		</svg>
	);
});

CornerUpLeft.displayName = "CornerUpLeft";
export default CornerUpLeft;

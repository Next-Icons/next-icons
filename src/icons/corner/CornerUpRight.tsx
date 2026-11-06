import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerUpRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m15 14 5-5-5-5" />
			<path d="M4 20v-7a4 4 0 0 1 4-4h12" />
		</svg>
	);
});

CornerUpRight.displayName = "CornerUpRight";
export default CornerUpRight;

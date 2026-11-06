import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MinimizeOutline = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 14h4m0 0v4m0-4-6 6m14-10h-4m0 0V6m0 4 6-6" />
		</svg>
	);
});

MinimizeOutline.displayName = "MinimizeOutline";
export default MinimizeOutline;

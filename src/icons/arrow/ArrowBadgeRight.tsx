import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBadgeRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 7h-6l4 5l-4 5h6l4 -5l-4 -5" />
		</svg>
	);
});

ArrowBadgeRight.displayName = "ArrowBadgeRight";
export default ArrowBadgeRight;

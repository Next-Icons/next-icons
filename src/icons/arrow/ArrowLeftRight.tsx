import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 3 4 7l4 4" />
			<path d="M4 7h16" />
			<path d="m16 21 4-4-4-4" />
			<path d="M20 17H4" />
		</svg>
	);
});

ArrowLeftRight.displayName = "ArrowLeftRight";
export default ArrowLeftRight;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsSplit = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 17h-8l-3.5 -5h-6.5" />
			<path d="M21 7h-8l-3.495 5" />
			<path d="M18 10l3 -3l-3 -3" />
			<path d="M18 20l3 -3l-3 -3" />
		</svg>
	);
});

ArrowsSplit.displayName = "ArrowsSplit";
export default ArrowsSplit;

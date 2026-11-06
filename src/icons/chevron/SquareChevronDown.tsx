import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareChevronDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<path d="m16 10-4 4-4-4" />
		</svg>
	);
});

SquareChevronDown.displayName = "SquareChevronDown";
export default SquareChevronDown;

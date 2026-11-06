import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SortAscending = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 6l7 0" />
			<path d="M4 12l7 0" />
			<path d="M4 18l9 0" />
			<path d="M15 9l3 -3l3 3" />
			<path d="M18 6l0 12" />
		</svg>
	);
});

SortAscending.displayName = "SortAscending";
export default SortAscending;

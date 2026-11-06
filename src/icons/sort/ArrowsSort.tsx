import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsSort = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 9l4 -4l4 4m-4 -4v14" />
			<path d="M21 15l-4 4l-4 -4m4 4v-14" />
		</svg>
	);
});

ArrowsSort.displayName = "ArrowsSort";
export default ArrowsSort;

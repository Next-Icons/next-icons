import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TagsChevronLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20.59 19h-12.86a.98 .98 0 0 1 -.81 -.411l-4.185 -6.125a.81 .81 0 0 1 0 -.928l4.184 -6.125a.98 .98 0 0 1 .811 -.411h12.86l-4.782 7l4.782 7" />
			<path d="M13.895 19l-4.465 -6.536a.81 .81 0 0 1 0 -.928l4.465 -6.536" />
		</svg>
	);
});

TagsChevronLeft.displayName = "TagsChevronLeft";
export default TagsChevronLeft;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TagsChevronRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19h13.485a1 1 0 0 0 .814 -.419l4.286 -6a1 1 0 0 0 0 -1.162l-4.286 -6a1 1 0 0 0 -.814 -.419h-13.485l5 7l-5 7" />
			<path d="M10 19l4.585 -6.419a1 1 0 0 0 0 -1.162l-4.585 -6.419" />
		</svg>
	);
});

TagsChevronRight.displayName = "TagsChevronRight";
export default TagsChevronRight;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TagsChevronDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 3v13.446c0 .345 .155 .665 .411 .848l6.125 4.375a.78 .78 0 0 0 .928 0l6.125 -4.375a1.04 1.04 0 0 0 .411 -.848v-13.446l-7 5l-7 -5" />
			<path d="M5 10l6.536 4.669a.78 .78 0 0 0 .928 0l6.536 -4.669" />
		</svg>
	);
});

TagsChevronDown.displayName = "TagsChevronDown";
export default TagsChevronDown;

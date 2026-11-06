import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AppleNews = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 14l6 6h-6l0 -6" />
			<path d="M20 10l-6 -6h6l0 6" />
			<path d="M4 4v4l12 12h4v-4l-12 -12l-4 0" />
		</svg>
	);
});

AppleNews.displayName = "AppleNews";
export default AppleNews;

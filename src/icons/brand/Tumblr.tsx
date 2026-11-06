import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Tumblr = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 21h4v-4h-4v-6h4v-4h-4v-4h-4v1a3 3 0 0 1 -3 3h-1v4h4v6a4 4 0 0 0 4 4" />
		</svg>
	);
});

Tumblr.displayName = "Tumblr";
export default Tumblr;

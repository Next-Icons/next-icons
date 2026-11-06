import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowGuide = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7" />
			<path d="M18 4l3 3l-3 3" />
		</svg>
	);
});

ArrowGuide.displayName = "ArrowGuide";
export default ArrowGuide;

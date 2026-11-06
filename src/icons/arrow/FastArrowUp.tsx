import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FastArrowUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 11L12 5L18 11" />
			<path d="M6 19L12 13L18 19" />
		</svg>
	);
});

FastArrowUp.displayName = "FastArrowUp";
export default FastArrowUp;

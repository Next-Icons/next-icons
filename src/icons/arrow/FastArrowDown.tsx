import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FastArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 13L12 19L18 13" />
			<path d="M6 5L12 11L18 5" />
		</svg>
	);
});

FastArrowDown.displayName = "FastArrowDown";
export default FastArrowDown;

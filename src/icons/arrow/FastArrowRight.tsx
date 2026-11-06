import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FastArrowRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 6L19 12L13 18" />
			<path d="M5 6L11 12L5 18" />
		</svg>
	);
});

FastArrowRight.displayName = "FastArrowRight";
export default FastArrowRight;

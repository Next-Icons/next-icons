import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DecimalsArrowLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m13 21-3-3 3-3" />
			<path d="M20 18H10" />
			<path d="M3 11h.01" />
			<rect height="8" rx="2.5" width="5" x="6" y="3" />
		</svg>
	);
});

DecimalsArrowLeft.displayName = "DecimalsArrowLeft";
export default DecimalsArrowLeft;

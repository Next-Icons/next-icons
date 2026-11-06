import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBarToLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 12l10 0" />
			<path d="M10 12l4 4" />
			<path d="M10 12l4 -4" />
			<path d="M4 4l0 16" />
		</svg>
	);
});

ArrowBarToLeft.displayName = "ArrowBarToLeft";
export default ArrowBarToLeft;

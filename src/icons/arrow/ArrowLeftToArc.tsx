import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftToArc = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 12h-12" />
			<path d="M13 16l-4 -4l4 -4" />
			<path d="M12 3a9 9 0 1 0 0 18" />
		</svg>
	);
});

ArrowLeftToArc.displayName = "ArrowLeftToArc";
export default ArrowLeftToArc;

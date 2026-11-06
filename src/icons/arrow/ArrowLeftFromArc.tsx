import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftFromArc = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 12h12" />
			<path d="M17 16l4 -4l-4 -4" />
			<path d="M12 3a9 9 0 1 0 0 18" />
		</svg>
	);
});

ArrowLeftFromArc.displayName = "ArrowLeftFromArc";
export default ArrowLeftFromArc;

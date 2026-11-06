import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsDiagonal = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 4l4 0l0 4" />
			<path d="M14 10l6 -6" />
			<path d="M8 20l-4 0l0 -4" />
			<path d="M4 20l6 -6" />
		</svg>
	);
});

ArrowsDiagonal.displayName = "ArrowsDiagonal";
export default ArrowsDiagonal;

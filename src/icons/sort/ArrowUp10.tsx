import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUp10 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m3 8 4-4 4 4" />
			<path d="M7 4v16" />
			<path d="M17 10V4h-2" />
			<path d="M15 10h4" />
			<rect height="6" ry="2" width="4" x="15" y="14" />
		</svg>
	);
});

ArrowUp10.displayName = "ArrowUp10";
export default ArrowUp10;

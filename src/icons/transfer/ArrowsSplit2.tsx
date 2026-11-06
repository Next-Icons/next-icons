import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsSplit2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897" />
			<path d="M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9" />
			<path d="M18 10l3 -3l-3 -3" />
			<path d="M18 20l3 -3l-3 -3" />
		</svg>
	);
});

ArrowsSplit2.displayName = "ArrowsSplit2";
export default ArrowsSplit2;

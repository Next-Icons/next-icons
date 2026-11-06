import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRampRight2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 3v8.707" />
			<path d="M16 14l4 -4l-4 -4" />
			<path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
		</svg>
	);
});

ArrowRampRight2.displayName = "ArrowRampRight2";
export default ArrowRampRight2;

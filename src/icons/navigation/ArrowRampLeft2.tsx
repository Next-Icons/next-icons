import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRampLeft2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 3v8.707" />
			<path d="M8 14l-4 -4l4 -4" />
			<path d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" />
		</svg>
	);
});

ArrowRampLeft2.displayName = "ArrowRampLeft2";
export default ArrowRampLeft2;

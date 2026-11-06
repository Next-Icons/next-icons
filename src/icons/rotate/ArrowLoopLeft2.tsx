import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLoopLeft2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 21v-6m0 -6v-1a4 4 0 1 1 4 4h-13" />
			<path d="M8 16l-4 -4l4 -4" />
		</svg>
	);
});

ArrowLoopLeft2.displayName = "ArrowLoopLeft2";
export default ArrowLoopLeft2;

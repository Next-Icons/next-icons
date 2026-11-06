import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLoopRight2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" />
			<path d="M17 16l4 -4l-4 -4" />
		</svg>
	);
});

ArrowLoopRight2.displayName = "ArrowLoopRight2";
export default ArrowLoopRight2;

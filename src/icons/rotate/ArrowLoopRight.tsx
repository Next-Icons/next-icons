import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLoopRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 21v-13a4 4 0 1 0 -4 4h13" />
			<path d="M17 16l4 -4l-4 -4" />
		</svg>
	);
});

ArrowLoopRight.displayName = "ArrowLoopRight";
export default ArrowLoopRight;

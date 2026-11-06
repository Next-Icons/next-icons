import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowMoveRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 12h10" />
			<path d="M18 9l3 3l-3 3" />
			<path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
		</svg>
	);
});

ArrowMoveRight.displayName = "ArrowMoveRight";
export default ArrowMoveRight;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowMoveDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 11v10" />
			<path d="M9 18l3 3l3 -3" />
			<path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
		</svg>
	);
});

ArrowMoveDown.displayName = "ArrowMoveDown";
export default ArrowMoveDown;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowMoveUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 13v-10" />
			<path d="M9 6l3 -3l3 3" />
			<path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4" />
		</svg>
	);
});

ArrowMoveUp.displayName = "ArrowMoveUp";
export default ArrowMoveUp;

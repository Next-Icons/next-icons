import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowMergeLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 8l4 -4l4 4" />
			<path d="M12 20v-16" />
			<path d="M6 18c4 -1.333 6 -4.667 6 -10" />
		</svg>
	);
});

ArrowMergeLeft.displayName = "ArrowMergeLeft";
export default ArrowMergeLeft;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RepeatCircle = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m8 8 2-2M8 8l2 2M8 8h6a2 2 0 0 1 2 2v1m0 5-2 2m2-2-2-2m2 2h-6a2 2 0 0 1-2-2v-1" />
			<circle r="10" transform="matrix(-1 0 0 1 12 12)" />
		</svg>
	);
});

RepeatCircle.displayName = "RepeatCircle";
export default RepeatCircle;

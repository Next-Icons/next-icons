import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowCapsule = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
			<path d="M15 8l3 3l3 -3" />
		</svg>
	);
});

ArrowCapsule.displayName = "ArrowCapsule";
export default ArrowCapsule;

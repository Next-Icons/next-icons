import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BorderCornerPill = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 20v-5c0 -6.075 4.925 -11 11 -11h5" />
		</svg>
	);
});

BorderCornerPill.displayName = "BorderCornerPill";
export default BorderCornerPill;

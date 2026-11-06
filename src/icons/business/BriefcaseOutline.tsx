import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BriefcaseOutline = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path
				d="M15 8V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2m6 0h4a2 2 0 0 1 2 2v3m-6-5H9m0 0H5a2 2 0 0 0-2 2v3m0 0v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5M3 13h7m11 0h-7m0 0v-2h-4v2m4 0v2h-4v-2"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
});

BriefcaseOutline.displayName = "BriefcaseOutline";
export default BriefcaseOutline;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MaximizeOutline = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 20H4m0 0v-4m0 4 6-6m6-10h4m0 0v4m0-4-6 6" />
		</svg>
	);
});

MaximizeOutline.displayName = "MaximizeOutline";
export default MaximizeOutline;

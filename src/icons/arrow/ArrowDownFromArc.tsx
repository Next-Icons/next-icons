import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownFromArc = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 15v-12" />
			<path d="M16 7l-4 -4l-4 4" />
			<path d="M3 12a9 9 0 0 0 18 0" />
		</svg>
	);
});

ArrowDownFromArc.displayName = "ArrowDownFromArc";
export default ArrowDownFromArc;

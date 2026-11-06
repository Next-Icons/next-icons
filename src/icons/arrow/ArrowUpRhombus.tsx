import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpRhombus = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 16v-13" />
			<path d="M15 6l-3 -3l-3 3" />
			<path d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5l2.5 2.5" />
		</svg>
	);
});

ArrowUpRhombus.displayName = "ArrowUpRhombus";
export default ArrowUpRhombus;

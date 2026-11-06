import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownZa = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m3 16 4 4 4-4" />
			<path d="M7 4v16" />
			<path d="M15 4h5l-5 6h5" />
			<path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
			<path d="M20 18h-5" />
		</svg>
	);
});

ArrowDownZa.displayName = "ArrowDownZa";
export default ArrowDownZa;

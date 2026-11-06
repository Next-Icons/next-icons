import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsJoin = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 7h5l3.5 5h9.5" />
			<path d="M3 17h5l3.495 -5" />
			<path d="M18 15l3 -3l-3 -3" />
		</svg>
	);
});

ArrowsJoin.displayName = "ArrowsJoin";
export default ArrowsJoin;

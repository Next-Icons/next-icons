import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Pepsi = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M4 16c5.713 -2.973 11 -3.5 13.449 -11.162" />
			<path d="M5 17.5c5.118 -2.859 15 0 14 -11" />
		</svg>
	);
});

Pepsi.displayName = "Pepsi";
export default Pepsi;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Binance = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6l-6 6" />
			<path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5l-6 -6" />
			<path d="M20 10l2 2l-2 2l-2 -2l2 -2" />
			<path d="M4 10l2 2l-2 2l-2 -2l2 -2" />
			<path d="M12 10l2 2l-2 2l-2 -2l2 -2" />
		</svg>
	);
});

Binance.displayName = "Binance";
export default Binance;

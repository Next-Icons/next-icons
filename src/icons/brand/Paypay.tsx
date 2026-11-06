import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Paypay = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6.375 21l3.938 -13.838" />
			<path d="M3 6c16.731 0 21.231 9.881 4.5 11" />
			<path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2" />
		</svg>
	);
});

Paypay.displayName = "Paypay";
export default Paypay;

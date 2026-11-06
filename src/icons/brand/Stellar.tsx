import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Stellar = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 6l-17 7v-1c-.004 -1.259 .234 -2.5 .81 -3.62c1.363 -2.686 4.178 -4.378 7.19 -4.38a7.5 7.5 0 0 1 2.61 .46" />
			<path d="M9.38 19.54a8 8 0 0 0 9.81 -3.92c.576 -1.12 .814 -2.361 .81 -3.62v-1l-17 7" />
		</svg>
	);
});

Stellar.displayName = "Stellar";
export default Stellar;

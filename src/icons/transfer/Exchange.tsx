import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Exchange = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />
			<path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
		</svg>
	);
});

Exchange.displayName = "Exchange";
export default Exchange;

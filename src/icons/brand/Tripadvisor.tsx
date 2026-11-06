import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Tripadvisor = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
			<path d="M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
			<path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5" />
			<path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5" />
			<path d="M10.5 15.5l1.5 2l1.5 -2" />
			<path d="M9 6.75c2 -.667 4 -.667 6 0" />
		</svg>
	);
});

Tripadvisor.displayName = "Tripadvisor";
export default Tripadvisor;

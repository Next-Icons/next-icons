import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Denodo = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 11h2v2h-2l0 -2" />
			<path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732" />
			<path d="M11 19h2v2h-2l0 -2" />
			<path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1l1 -1.732" />
			<path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732" />
			<path d="M11 3h2v2h-2l0 -2" />
			<path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732l-1.732 -1" />
		</svg>
	);
});

Denodo.displayName = "Denodo";
export default Denodo;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Spacehey = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14 20h6v-6a3 3 0 0 0 -6 0v6" />
			<path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4" />
		</svg>
	);
});

Spacehey.displayName = "Spacehey";
export default Spacehey;

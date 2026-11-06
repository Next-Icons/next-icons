import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Backbone = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 20l14 -8l-14 -8l0 16" />
			<path d="M19 20l-14 -8l14 -8l0 16" />
		</svg>
	);
});

Backbone.displayName = "Backbone";
export default Backbone;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Bulma = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 16l1 -9l5 -5l6.5 6l-3.5 4l5 5l-8 5l-6 -6" />
		</svg>
	);
});

Bulma.displayName = "Bulma";
export default Bulma;

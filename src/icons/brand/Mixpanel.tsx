import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Mixpanel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
			<path d="M19 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
			<path d="M11 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
		</svg>
	);
});

Mixpanel.displayName = "Mixpanel";
export default Mixpanel;

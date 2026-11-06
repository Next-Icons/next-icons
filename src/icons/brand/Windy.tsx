import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Windy = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 4c0 5.5 -.33 16 4 16s7.546 -11.27 8 -13" />
			<path d="M3 4c.253 5.44 1.449 16 5.894 16c4.444 0 8.42 -10.036 9.106 -14" />
		</svg>
	);
});

Windy.displayName = "Windy";
export default Windy;

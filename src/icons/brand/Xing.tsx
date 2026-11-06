import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Xing = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 21l-4 -7l6.5 -11" />
			<path d="M7 7l2 3.5l-3 4.5" />
		</svg>
	);
});

Xing.displayName = "Xing";
export default Xing;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBarToDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 20l16 0" />
			<path d="M12 14l0 -10" />
			<path d="M12 14l4 -4" />
			<path d="M12 14l-4 -4" />
		</svg>
	);
});

ArrowBarToDown.displayName = "ArrowBarToDown";
export default ArrowBarToDown;

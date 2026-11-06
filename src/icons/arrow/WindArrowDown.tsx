import { forwardRef } from "react";
import type { IconProps } from "../../types";
const WindArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 2v8" />
			<path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
			<path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
			<path d="m6 6 4 4 4-4" />
		</svg>
	);
});

WindArrowDown.displayName = "WindArrowDown";
export default WindArrowDown;

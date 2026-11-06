import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Hierarchy2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M10 3h4v4h-4l0 -4" />
			<path d="M3 17h4v4h-4l0 -4" />
			<path d="M17 17h4v4h-4l0 -4" />
			<path d="M7 17l5 -4l5 4" />
			<path d="M12 7l0 6" />
		</svg>
	);
});

Hierarchy2.displayName = "Hierarchy2";
export default Hierarchy2;

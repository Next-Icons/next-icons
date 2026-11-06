import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MousePointerClick = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 4.1 12 6" />
			<path d="m5.1 8-2.9-.8" />
			<path d="m6 12-1.9 2" />
			<path d="M7.2 2.2 8 5.1" />
			<path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
		</svg>
	);
});

MousePointerClick.displayName = "MousePointerClick";
export default MousePointerClick;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Inertia = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4l-4.5 0" />
			<path d="M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4l-4.5 0" />
		</svg>
	);
});

Inertia.displayName = "Inertia";
export default Inertia;

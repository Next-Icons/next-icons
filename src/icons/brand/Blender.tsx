import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Blender = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 14a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
			<path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M3 16l9 -6.5" />
			<path d="M6 9h9" />
			<path d="M13 5l5.65 5" />
		</svg>
	);
});

Blender.displayName = "Blender";
export default Blender;

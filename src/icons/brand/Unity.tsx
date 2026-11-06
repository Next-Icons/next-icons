import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Unity = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 3l6 4v7" />
			<path d="M18 17l-6 4l-6 -4" />
			<path d="M4 14v-7l6 -4" />
			<path d="M4 7l8 5v9" />
			<path d="M20 7l-8 5" />
		</svg>
	);
});

Unity.displayName = "Unity";
export default Unity;

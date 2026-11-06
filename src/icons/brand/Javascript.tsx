import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Javascript = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0" />
			<path d="M7.5 8h3v8l-2 -1" />
			<path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
		</svg>
	);
});

Javascript.displayName = "Javascript";
export default Javascript;

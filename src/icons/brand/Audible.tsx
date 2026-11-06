import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Audible = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18.46 9.75a9 9 0 0 0 -12.92 0" />
			<path d="M14.34 11.58a5 5 0 0 0 -4.68 0" />
			<path d="M22 13l-10 4l-10 -4" />
		</svg>
	);
});

Audible.displayName = "Audible";
export default Audible;

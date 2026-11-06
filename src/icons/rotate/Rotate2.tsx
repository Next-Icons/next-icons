import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Rotate2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
			<path d="M18.37 7.16l0 .01" />
			<path d="M13 19.94l0 .01" />
			<path d="M16.84 18.37l0 .01" />
			<path d="M19.37 15.1l0 .01" />
			<path d="M19.94 11l0 .01" />
		</svg>
	);
});

Rotate2.displayName = "Rotate2";
export default Rotate2;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AntennaBars3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 18l0 -3" />
			<path d="M10 18l0 -6" />
			<path d="M14 18l0 .01" />
			<path d="M18 18l0 .01" />
		</svg>
	);
});

AntennaBars3.displayName = "AntennaBars3";
export default AntennaBars3;

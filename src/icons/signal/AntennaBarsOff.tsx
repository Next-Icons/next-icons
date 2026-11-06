import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AntennaBarsOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 18v-3" />
			<path d="M10 18v-6" />
			<path d="M14 18v-4" />
			<path d="M14 10v-1" />
			<path d="M18 14v-8" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

AntennaBarsOff.displayName = "AntennaBarsOff";
export default AntennaBarsOff;

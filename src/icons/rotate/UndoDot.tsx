import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UndoDot = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
			<path d="M3 7v6h6" />
			<circle cx="12" cy="17" r="1" />
		</svg>
	);
});

UndoDot.displayName = "UndoDot";
export default UndoDot;

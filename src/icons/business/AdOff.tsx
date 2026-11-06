import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AdOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
			<path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4" />
			<path d="M7 13h4" />
			<path d="M17 9v4" />
			<path d="M16.115 12.131c.33 .149 .595 .412 .747 .74" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

AdOff.displayName = "AdOff";
export default AdOff;

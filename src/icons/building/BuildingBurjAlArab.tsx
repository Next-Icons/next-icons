import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingBurjAlArab = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M3 21h18" />
				<path d="M7 21v-18" />
				<path d="M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72" />
				<path d="M5 9h12" />
				<path d="M7 13h4" />
				<path d="M7 17h4" />
			</svg>
		);
	}
);

BuildingBurjAlArab.displayName = "BuildingBurjAlArab";
export default BuildingBurjAlArab;

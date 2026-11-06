import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingSkyscraper = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 21l18 0" />
				<path d="M5 21v-14l8 -4v18" />
				<path d="M19 21v-10l-6 -4" />
				<path d="M9 9l0 .01" />
				<path d="M9 12l0 .01" />
				<path d="M9 15l0 .01" />
				<path d="M9 18l0 .01" />
			</svg>
		);
	}
);

BuildingSkyscraper.displayName = "BuildingSkyscraper";
export default BuildingSkyscraper;

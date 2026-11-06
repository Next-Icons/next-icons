import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingBroadcastTower = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
				<path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
				<path d="M9 21l3 -9l3 9" />
				<path d="M10 19h4" />
			</svg>
		);
	}
);

BuildingBroadcastTower.displayName = "BuildingBroadcastTower";
export default BuildingBroadcastTower;

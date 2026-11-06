import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingLighthouse = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 3l2 3l2 15h-8l2 -15l2 -3" />
				<path d="M8 9l8 0" />
				<path d="M3 11l2 -2l-2 -2" />
				<path d="M21 11l-2 -2l2 -2" />
			</svg>
		);
	}
);

BuildingLighthouse.displayName = "BuildingLighthouse";
export default BuildingLighthouse;

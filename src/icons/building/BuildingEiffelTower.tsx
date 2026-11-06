import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingEiffelTower = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M11 4c0 4.889 -2.292 12.111 -5 17" />
				<path d="M13 4c0 4.889 2.292 12.111 5 17" />
				<path d="M3 21h18" />
				<path d="M8 14h8" />
				<path d="M9 10h6" />
				<path d="M10 4h4" />
				<path d="M12 2v1.778" />
				<path d="M10 21s.27 -1.406 .667 -2c.333 -.5 .666 -1 1.333 -1s1 .5 1.333 1c.448 .672 .667 2 .667 2" />
			</svg>
		);
	}
);

BuildingEiffelTower.displayName = "BuildingEiffelTower";
export default BuildingEiffelTower;

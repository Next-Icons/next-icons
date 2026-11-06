import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BatteryVerticalCharging2 = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M7 18v-11c0 -1.105 .895 -2 2 -2h.5c.276 0 .5 -.224 .5 -.5s.224 -.5 .5 -.5h3c.276 0 .5 .224 .5 .5s.224 .5 .5 .5h.5c1.105 0 2 .895 2 2v1m-10 10c0 1.105 .895 2 2 2h1" />
				<path d="M12 14h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
				<path d="M15 21v-3" />
				<path d="M13 14v-2.5" />
				<path d="M17 14v-2.5" />
			</svg>
		);
	}
);

BatteryVerticalCharging2.displayName = "BatteryVerticalCharging2";
export default BatteryVerticalCharging2;

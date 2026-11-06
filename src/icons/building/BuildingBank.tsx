import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BuildingBank = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 10l18 0" />
			<path d="M5 6l7 -3l7 3" />
			<path d="M4 10l0 11" />
			<path d="M20 10l0 11" />
			<path d="M8 14l0 3" />
			<path d="M12 14l0 3" />
			<path d="M16 14l0 3" />
		</svg>
	);
});

BuildingBank.displayName = "BuildingBank";
export default BuildingBank;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ScaleOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 20h10" />
			<path d="M9.452 5.425l2.548 -.425l6 1" />
			<path d="M12 3v5m0 4v8" />
			<path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
			<path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

ScaleOff.displayName = "ScaleOff";
export default ScaleOff;

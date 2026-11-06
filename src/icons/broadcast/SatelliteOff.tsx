import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SatelliteOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293" />
			<path d="M6 10l-3 3l3 3l3 -3" />
			<path d="M10 6l3 -3l3 3l-3 3" />
			<path d="M12 12l1.5 1.5" />
			<path d="M14.5 17c.69 0 1.316 -.28 1.769 -.733" />
			<path d="M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

SatelliteOff.displayName = "SatelliteOff";
export default SatelliteOff;

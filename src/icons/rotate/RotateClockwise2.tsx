import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RotateClockwise2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
			<path d="M5.63 7.16l0 .01" />
			<path d="M4.06 11l0 .01" />
			<path d="M4.63 15.1l0 .01" />
			<path d="M7.16 18.37l0 .01" />
			<path d="M11 19.94l0 .01" />
		</svg>
	);
});

RotateClockwise2.displayName = "RotateClockwise2";
export default RotateClockwise2;

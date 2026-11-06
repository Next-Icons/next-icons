import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleOpenArrowDown = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M15.998 3.934a9 9 0 1 1 -3.998 -.934v13" />
				<path d="M16 12l-4 4l-4 -4" />
			</svg>
		);
	}
);

CircleOpenArrowDown.displayName = "CircleOpenArrowDown";
export default CircleOpenArrowDown;

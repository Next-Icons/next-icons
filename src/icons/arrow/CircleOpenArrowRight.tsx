import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleOpenArrowRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3.934 8.002a9 9 0 1 1 -.934 3.998h13" />
				<path d="M12 8l4 4l-4 4" />
			</svg>
		);
	}
);

CircleOpenArrowRight.displayName = "CircleOpenArrowRight";
export default CircleOpenArrowRight;

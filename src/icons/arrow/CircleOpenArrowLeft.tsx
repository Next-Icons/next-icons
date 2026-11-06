import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleOpenArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M20.066 8.002a9 9 0 1 0 .934 3.998h-13" />
				<path d="M12 8l-4 4l4 4" />
			</svg>
		);
	}
);

CircleOpenArrowLeft.displayName = "CircleOpenArrowLeft";
export default CircleOpenArrowLeft;

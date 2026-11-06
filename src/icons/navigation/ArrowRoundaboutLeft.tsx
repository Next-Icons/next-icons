import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRoundaboutLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 9h8a5 5 0 1 1 5 5v7" />
				<path d="M7 5l-4 4l4 4" />
			</svg>
		);
	}
);

ArrowRoundaboutLeft.displayName = "ArrowRoundaboutLeft";
export default ArrowRoundaboutLeft;

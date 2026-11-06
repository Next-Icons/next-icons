import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareArrowOutUpLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
				<path d="m3 3 9 9" />
				<path d="M3 9V3h6" />
			</svg>
		);
	}
);

SquareArrowOutUpLeft.displayName = "SquareArrowOutUpLeft";
export default SquareArrowOutUpLeft;

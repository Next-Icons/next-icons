import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareArrowRightEnter = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="m10 16 4-4-4-4" />
				<path d="M3 12h11" />
				<path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
			</svg>
		);
	}
);

SquareArrowRightEnter.displayName = "SquareArrowRightEnter";
export default SquareArrowRightEnter;

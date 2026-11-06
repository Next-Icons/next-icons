import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareArrowRightExit = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M10 12h11" />
				<path d="m17 16 4-4-4-4" />
				<path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" />
			</svg>
		);
	}
);

SquareArrowRightExit.displayName = "SquareArrowRightExit";
export default SquareArrowRightExit;

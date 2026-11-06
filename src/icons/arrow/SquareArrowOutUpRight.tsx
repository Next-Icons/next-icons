import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareArrowOutUpRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
				<path d="m21 3-9 9" />
				<path d="M15 3h6v6" />
			</svg>
		);
	}
);

SquareArrowOutUpRight.displayName = "SquareArrowOutUpRight";
export default SquareArrowOutUpRight;

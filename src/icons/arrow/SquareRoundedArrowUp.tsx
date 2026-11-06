import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareRoundedArrowUp = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M16 12l-4 -4l-4 4" />
				<path d="M12 16v-8" />
				<path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
			</svg>
		);
	}
);

SquareRoundedArrowUp.displayName = "SquareRoundedArrowUp";
export default SquareRoundedArrowUp;

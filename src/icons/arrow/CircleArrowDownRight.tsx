import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleArrowDownRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
				<path d="M15 15h-6" />
				<path d="M15 9v6l-6 -6" />
			</svg>
		);
	}
);

CircleArrowDownRight.displayName = "CircleArrowDownRight";
export default CircleArrowDownRight;

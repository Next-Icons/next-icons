import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleArrowOutUpRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M22 12A10 10 0 1 1 12 2" />
				<path d="M22 2 12 12" />
				<path d="M16 2h6v6" />
			</svg>
		);
	}
);

CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight";
export default CircleArrowOutUpRight;

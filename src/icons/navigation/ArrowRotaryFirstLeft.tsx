import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRotaryFirstLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" />
				<path d="M16 10v10" />
				<path d="M13.5 9.5l-8.5 8.5" />
				<path d="M10 18h-5v-5" />
			</svg>
		);
	}
);

ArrowRotaryFirstLeft.displayName = "ArrowRotaryFirstLeft";
export default ArrowRotaryFirstLeft;

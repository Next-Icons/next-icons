import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRotaryLastLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" />
				<path d="M15 15v6" />
				<path d="M12.5 9.5l-6.5 -6.5" />
				<path d="M11 3h-5v5" />
			</svg>
		);
	}
);

ArrowRotaryLastLeft.displayName = "ArrowRotaryLastLeft";
export default ArrowRotaryLastLeft;

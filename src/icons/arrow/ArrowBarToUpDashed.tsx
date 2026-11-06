import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBarToUpDashed = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 10v10" />
				<path d="M12 10l4 4" />
				<path d="M12 10l-4 4" />
				<path d="M4 4h3m13 0h-3m-3.5 0h-3" />
			</svg>
		);
	}
);

ArrowBarToUpDashed.displayName = "ArrowBarToUpDashed";
export default ArrowBarToUpDashed;

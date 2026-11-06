import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChevronLeftCircleLine = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="m13 9-3 3 3 3" />
				<circle cx="12" cy="12" r="9" />
			</svg>
		);
	}
);

ChevronLeftCircleLine.displayName = "ChevronLeftCircleLine";
export default ChevronLeftCircleLine;

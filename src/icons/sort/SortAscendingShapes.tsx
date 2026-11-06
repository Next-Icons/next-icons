import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SortAscendingShapes = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M4 15l3 3l3 -3" />
				<path d="M7 6v12" />
				<path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4" />
				<path d="M17 14l-3.5 6h7l-3.5 -6" />
			</svg>
		);
	}
);

SortAscendingShapes.displayName = "SortAscendingShapes";
export default SortAscendingShapes;

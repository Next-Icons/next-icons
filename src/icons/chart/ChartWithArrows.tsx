import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartWithArrows = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 18l14 0" />
			<path d="M9 9l3 3l-3 3" />
			<path d="M14 15l3 3l-3 3" />
			<path d="M3 3l0 18" />
			<path d="M3 12l9 0" />
			<path d="M18 3l3 3l-3 3" />
			<path d="M3 6l18 0" />
		</svg>
	);
});

ChartWithArrows.displayName = "ChartWithArrows";
export default ChartWithArrows;

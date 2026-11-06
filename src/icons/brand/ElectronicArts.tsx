import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ElectronicArts = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
			<path d="M17 14h-2" />
			<path d="M6.5 12h3.5" />
			<path d="M8 9h3" />
		</svg>
	);
});

ElectronicArts.displayName = "ElectronicArts";
export default ElectronicArts;

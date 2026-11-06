import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CpuOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" />
			<path d="M13 9h2v2m0 4h-6v-6" />
			<path d="M3 10h2" />
			<path d="M3 14h2" />
			<path d="M10 3v2" />
			<path d="M14 3v2" />
			<path d="M21 10h-2" />
			<path d="M21 14h-2" />
			<path d="M14 21v-2" />
			<path d="M10 21v-2" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

CpuOff.displayName = "CpuOff";
export default CpuOff;

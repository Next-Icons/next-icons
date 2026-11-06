import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Cpu2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12" />
			<path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" />
			<path d="M3 10h2" />
			<path d="M3 14h2" />
			<path d="M10 3v2" />
			<path d="M14 3v2" />
			<path d="M21 10h-2" />
			<path d="M21 14h-2" />
			<path d="M14 21v-2" />
			<path d="M10 21v-2" />
		</svg>
	);
});

Cpu2.displayName = "Cpu2";
export default Cpu2;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Hbo = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 16v-8" />
			<path d="M6 8v8" />
			<path d="M2 12h4" />
			<path d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8" />
			<path d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8" />
			<path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		</svg>
	);
});

Hbo.displayName = "Hbo";
export default Hbo;

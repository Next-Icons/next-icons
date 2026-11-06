import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Projector = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 7 3 5" />
			<path d="M9 6V3" />
			<path d="m13 7 2-2" />
			<circle cx="9" cy="13" r="3" />
			<path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
			<path d="M16 16h2" />
		</svg>
	);
});

Projector.displayName = "Projector";
export default Projector;

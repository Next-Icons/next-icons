import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Asana = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M14 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M4 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
		</svg>
	);
});

Asana.displayName = "Asana";
export default Asana;

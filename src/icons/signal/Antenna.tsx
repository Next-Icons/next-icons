import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Antenna = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 12 7 2" />
			<path d="m7 12 5-10" />
			<path d="m12 12 5-10" />
			<path d="m17 12 5-10" />
			<path d="M4.5 7h15" />
			<path d="M12 16v6" />
		</svg>
	);
});

Antenna.displayName = "Antenna";
export default Antenna;

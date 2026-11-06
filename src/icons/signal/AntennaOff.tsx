import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AntennaOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 4v8" />
			<path d="M16 4.5v7" />
			<path d="M12 5v3m0 4v9" />
			<path d="M8 8v2.5" />
			<path d="M4 6v4" />
			<path d="M20 8h-8m-4 0h-4" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

AntennaOff.displayName = "AntennaOff";
export default AntennaOff;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const EvCharger = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
			<path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
			<path d="M2 21h13" />
			<path d="M3 7h11" />
			<path d="m9 11-2 3h3l-2 3" />
		</svg>
	);
});

EvCharger.displayName = "EvCharger";
export default EvCharger;

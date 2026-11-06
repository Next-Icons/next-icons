import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MapShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" />
			<path d="M9 4v13" />
			<path d="M15 7v6.5" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
		</svg>
	);
});

MapShare.displayName = "MapShare";
export default MapShare;

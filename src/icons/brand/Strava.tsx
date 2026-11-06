import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Strava = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" />
		</svg>
	);
});

Strava.displayName = "Strava";
export default Strava;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Scale3d = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 7v11a1 1 0 0 0 1 1h11" />
			<path d="M5.293 18.707 11 13" />
			<circle cx="19" cy="19" r="2" />
			<circle cx="5" cy="5" r="2" />
		</svg>
	);
});

Scale3d.displayName = "Scale3d";
export default Scale3d;

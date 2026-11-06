import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Spotify = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
			<path d="M9 15c1.5 -1 4 -1 5 .5" />
			<path d="M7 9c2 -1 6 -2 10 .5" />
		</svg>
	);
});

Spotify.displayName = "Spotify";
export default Spotify;

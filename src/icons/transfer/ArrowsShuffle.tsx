import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsShuffle = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 4l3 3l-3 3" />
			<path d="M18 20l3 -3l-3 -3" />
			<path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
			<path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
		</svg>
	);
});

ArrowsShuffle.displayName = "ArrowsShuffle";
export default ArrowsShuffle;

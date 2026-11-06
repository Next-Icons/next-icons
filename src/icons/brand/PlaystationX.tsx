import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PlaystationX = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
			<path d="M8.5 8.5l7 7" />
			<path d="M8.5 15.5l7 -7" />
		</svg>
	);
});

PlaystationX.displayName = "PlaystationX";
export default PlaystationX;

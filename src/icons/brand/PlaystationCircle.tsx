import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PlaystationCircle = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
		</svg>
	);
});

PlaystationCircle.displayName = "PlaystationCircle";
export default PlaystationCircle;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UTurnLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5" />
			<path d="M11 14l-3 3l-3 -3" />
		</svg>
	);
});

UTurnLeft.displayName = "UTurnLeft";
export default UTurnLeft;

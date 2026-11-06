import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BorderCornerIos = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 20c0 -6.559 0 -9.838 1.628 -12.162a9 9 0 0 1 2.21 -2.21c2.324 -1.628 5.602 -1.628 12.162 -1.628" />
		</svg>
	);
});

BorderCornerIos.displayName = "BorderCornerIos";
export default BorderCornerIos;

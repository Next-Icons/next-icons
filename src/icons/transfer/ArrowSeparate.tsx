import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowSeparate = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 7L3 12L8 17" />
			<path d="M16 7L21 12L16 17" />
		</svg>
	);
});

ArrowSeparate.displayName = "ArrowSeparate";
export default ArrowSeparate;

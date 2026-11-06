import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUnion = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 7L15 12L20 17" />
			<path d="M4 7L9 12L4 17" />
		</svg>
	);
});

ArrowUnion.displayName = "ArrowUnion";
export default ArrowUnion;

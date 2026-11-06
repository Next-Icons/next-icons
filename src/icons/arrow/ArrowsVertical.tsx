import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowsVertical = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 7l4 -4l4 4" />
			<path d="M8 17l4 4l4 -4" />
			<path d="M12 3l0 18" />
		</svg>
	);
});

ArrowsVertical.displayName = "ArrowsVertical";
export default ArrowsVertical;

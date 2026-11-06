import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Sort = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 14H2" />
			<path d="M8 10H2" />
			<path d="M6 6H2" />
			<path d="M12 18H2" />
			<path d="M19 20V4M19 20L22 17M19 20L16 17M19 4L22 7M19 4L16 7" />
		</svg>
	);
});

Sort.displayName = "Sort";
export default Sort;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Collapse = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 20L15 15M15 15V19M15 15H19" />
			<path d="M4 20L9 15M9 15V19M9 15H5" />
			<path d="M20 4L15 9M15 9V5M15 9H19" />
			<path d="M4 4L9 9M9 9V5M9 9H5" />
		</svg>
	);
});

Collapse.displayName = "Collapse";
export default Collapse;

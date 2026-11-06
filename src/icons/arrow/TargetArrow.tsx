import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TargetArrow = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 7a5 5 0 1 0 5 5" />
			<path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
			<path d="M15 6v3h3l3 -3h-3v-3l-3 3" />
			<path d="M15 9l-3 3" />
		</svg>
	);
});

TargetArrow.displayName = "TargetArrow";
export default TargetArrow;

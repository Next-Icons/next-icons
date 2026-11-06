import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ExpandLines = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 2L6 2" />
			<path d="M18 22L6 22" />
			<path d="M12 14V19M12 19L15 16M12 19L9 16" />
			<path d="M12 10V5M12 5L15 8M12 5L9 8" />
		</svg>
	);
});

ExpandLines.displayName = "ExpandLines";
export default ExpandLines;

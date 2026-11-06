import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChevronsLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m11 17-5-5 5-5" />
			<path d="m18 17-5-5 5-5" />
		</svg>
	);
});

ChevronsLeft.displayName = "ChevronsLeft";
export default ChevronsLeft;

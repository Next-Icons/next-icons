import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChevronsLeftRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m9 7-5 5 5 5" />
			<path d="m15 7 5 5-5 5" />
		</svg>
	);
});

ChevronsLeftRight.displayName = "ChevronsLeftRight";
export default ChevronsLeftRight;

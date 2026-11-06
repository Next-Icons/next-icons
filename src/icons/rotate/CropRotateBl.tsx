import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CropRotateBl = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 14V17C4 19.2091 5.79086 21 8 21H12" />
			<path d="M1.5 16.5L4 14L6.5 16.5" />
			<path d="M20 11L20 5C20 4.44772 19.5523 4 19 4L13 4" />
			<path d="M8 4H10" />
			<path d="M20 16V14" />
			<path d="M10 2L10 13C10 13.5523 10.4477 14 11 14L22 14" />
		</svg>
	);
});

CropRotateBl.displayName = "CropRotateBl";
export default CropRotateBl;

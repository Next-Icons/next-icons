import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CropRotateBr = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 20H17C19.2091 20 21 18.2091 21 16V12" />
			<path d="M16.5 22.5L14 20L16.5 17.5" />
			<path d="M14 11L14 5C14 4.44772 13.5523 4 13 4L7 4" />
			<path d="M2 4H4" />
			<path d="M14 16V14" />
			<path d="M4 2L4 13C4 13.5523 4.44772 14 5 14L16 14" />
		</svg>
	);
});

CropRotateBr.displayName = "CropRotateBr";
export default CropRotateBr;

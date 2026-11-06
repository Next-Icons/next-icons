import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CropRotateTl = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 4H7C4.79086 4 3 5.79086 3 8V12" />
			<path d="M7.5 1.5L10 4L7.5 6.5" />
			<path d="M20 17L20 11C20 10.4477 19.5523 10 19 10L13 10" />
			<path d="M8 10H10" />
			<path d="M20 22V20" />
			<path d="M10 8L10 19C10 19.5523 10.4477 20 11 20L22 20" />
		</svg>
	);
});

CropRotateTl.displayName = "CropRotateTl";
export default CropRotateTl;

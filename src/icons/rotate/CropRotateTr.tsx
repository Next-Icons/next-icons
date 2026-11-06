import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CropRotateTr = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 10V7C20 4.79086 18.2091 3 16 3H12" />
			<path d="M22.5 7.5L20 10L17.5 7.5" />
			<path d="M14 17L14 11C14 10.4477 13.5523 10 13 10L7 10" />
			<path d="M2 10H4" />
			<path d="M14 22V20" />
			<path d="M4 8L4 19C4 19.5523 4.44772 20 5 20L16 20" />
		</svg>
	);
});

CropRotateTr.displayName = "CropRotateTr";
export default CropRotateTr;

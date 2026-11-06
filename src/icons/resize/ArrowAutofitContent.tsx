import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowAutofitContent = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M6 4l-3 3l3 3" />
				<path d="M18 4l3 3l-3 3" />
				<path d="M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2" />
				<path d="M10 7h-7" />
				<path d="M21 7h-7" />
			</svg>
		);
	}
);

ArrowAutofitContent.displayName = "ArrowAutofitContent";
export default ArrowAutofitContent;

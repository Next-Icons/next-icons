import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PresentationLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path
				d="M12 9v2m4 0V7m-8 4h.01M3 3h1m17 0h-1m0 0v12h-6m6-12H4m0 0v12h6m0 0-2 6m2-6h4m0 0 2 6"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
});

PresentationLine.displayName = "PresentationLine";
export default PresentationLine;

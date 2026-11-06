import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Yahoo = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 6l5 0" />
			<path d="M7 18l7 0" />
			<path d="M4.5 6l5.5 7v5" />
			<path d="M10 13l6 -5" />
			<path d="M12.5 8l5 0" />
			<path d="M20 11l0 4" />
			<path d="M20 18l0 .01" />
		</svg>
	);
});

Yahoo.displayName = "Yahoo";
export default Yahoo;

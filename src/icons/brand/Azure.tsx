import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Azure = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 7.5l-4 9.5h4l6 -15l-6 5.5" />
			<path d="M22 20l-7 -15l-3 7l4 5l-8 3l14 0" />
		</svg>
	);
});

Azure.displayName = "Azure";
export default Azure;

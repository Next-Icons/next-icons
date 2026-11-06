import { forwardRef } from "react";
import type { IconProps } from "../../types";
const XTwitter = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
			<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
		</svg>
	);
});

XTwitter.displayName = "XTwitter";
export default XTwitter;

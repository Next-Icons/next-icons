import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Speaker = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="20" rx="2" width="16" x="4" y="2" />
			<path d="M12 6h.01" />
			<circle cx="12" cy="14" r="4" />
			<path d="M12 14h.01" />
		</svg>
	);
});

Speaker.displayName = "Speaker";
export default Speaker;

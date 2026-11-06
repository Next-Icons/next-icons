import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BubbleTea = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" />
			<path d="M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" />
			<path d="M5 9h14" />
			<path d="M12 9l4 -7" />
			<path d="M10.01 14h.01" />
			<path d="M11.02 18h.01" />
			<path d="M13.02 16h.01" />
		</svg>
	);
});

BubbleTea.displayName = "BubbleTea";
export default BubbleTea;

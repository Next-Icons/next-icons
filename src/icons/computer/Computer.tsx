import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Computer = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 18h6" />
			<path d="M6 18h.01" />
			<path d="M8 6h1" />
			<rect height="8" rx="2" width="20" x="2" y="14" />
			<rect height="12" rx="2" width="16" x="4" y="2" />
		</svg>
	);
});

Computer.displayName = "Computer";
export default Computer;

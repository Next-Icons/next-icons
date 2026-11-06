import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Reason = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
			<path d="M18 18h-3v-6h3" />
			<path d="M18 15h-3" />
			<path d="M8 18v-6h2.5a1.5 1.5 0 0 1 0 3h-2.5" />
			<path d="M12 18l-2 -3" />
		</svg>
	);
});

Reason.displayName = "Reason";
export default Reason;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Fortnite = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1l0 -18" />
		</svg>
	);
});

Fortnite.displayName = "Fortnite";
export default Fortnite;

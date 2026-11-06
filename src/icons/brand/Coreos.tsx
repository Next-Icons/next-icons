import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Coreos = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
			<path d="M12 3c-3.263 3.212 -3 7.654 -3 12c4.59 .244 8.814 -.282 12 -3" />
			<path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5" />
		</svg>
	);
});

Coreos.displayName = "Coreos";
export default Coreos;

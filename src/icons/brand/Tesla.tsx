import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Tesla = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 21l3 -11c2.359 0 3 0 3 1c0 0 1.18 -1.745 2 -3c-3.077 -1.464 -6 -1 -6 -1l-2 2l-2 -2s-2.923 -.464 -6 1c.82 1.255 2 3 2 3c0 -1 .744 -1 3 -1l3 11" />
			<path d="M20 5c-5.114 -2 -10.886 -2 -16 0" />
		</svg>
	);
});

Tesla.displayName = "Tesla";
export default Tesla;

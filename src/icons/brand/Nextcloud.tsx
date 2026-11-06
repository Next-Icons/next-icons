import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Nextcloud = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
			<path d="M2 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
			<path d="M17 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
		</svg>
	);
});

Nextcloud.displayName = "Nextcloud";
export default Nextcloud;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Nextjs = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
			<path d="M15 12v-3" />
		</svg>
	);
});

Nextjs.displayName = "Nextjs";
export default Nextjs;

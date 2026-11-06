import { forwardRef } from "react";
import type { IconProps } from "../../types";
const HomeShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" />
			<path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
		</svg>
	);
});

HomeShare.displayName = "HomeShare";
export default HomeShare;

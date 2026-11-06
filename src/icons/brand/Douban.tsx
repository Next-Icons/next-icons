import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Douban = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 20h16" />
			<path d="M5 4h14" />
			<path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2" />
			<path d="M16 14l-2 6" />
			<path d="M8 17l1 3" />
		</svg>
	);
});

Douban.displayName = "Douban";
export default Douban;

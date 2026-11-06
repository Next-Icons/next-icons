import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Linktree = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 10h16" />
			<path d="M6.5 4.5l11 11" />
			<path d="M6.5 15.5l11 -11" />
			<path d="M12 10v-8" />
			<path d="M12 15v7" />
		</svg>
	);
});

Linktree.displayName = "Linktree";
export default Linktree;

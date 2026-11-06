import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Zhihu = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 6h6v12h-2l-2 2l-1 -2h-1l0 -12" />
			<path d="M4 12h6.5" />
			<path d="M10.5 6h-5" />
			<path d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5" />
			<path d="M8 6v7c0 4.5 -2 5.5 -4 7" />
			<path d="M11 18l-3 -5" />
		</svg>
	);
});

Zhihu.displayName = "Zhihu";
export default Zhihu;

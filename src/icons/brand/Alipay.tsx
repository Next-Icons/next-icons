import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Alipay = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 3h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2" />
			<path d="M7 7h10" />
			<path d="M12 3v7" />
			<path d="M21 17.314c-2.971 -1.923 -15 -8.779 -15 -1.864c0 1.716 1.52 2.55 2.985 2.55c3.512 0 6.814 -5.425 6.814 -8h-6.604" />
		</svg>
	);
});

Alipay.displayName = "Alipay";
export default Alipay;

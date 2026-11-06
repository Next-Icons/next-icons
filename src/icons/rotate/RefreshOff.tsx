import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RefreshOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 11a8.1 8.1 0 0 0 -11.271 -6.305m-2.41 1.624a8.083 8.083 0 0 0 -1.819 2.681m-.5 -4v4h4" />
			<path d="M4 13a8.1 8.1 0 0 0 13.671 4.691m2.329 -1.691v-1h-1" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

RefreshOff.displayName = "RefreshOff";
export default RefreshOff;

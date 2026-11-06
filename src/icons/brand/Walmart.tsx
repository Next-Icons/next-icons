import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Walmart = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 8.04v-5.04" />
			<path d="M15.5 10l4.5 -2.5" />
			<path d="M15.5 14l4.5 2.5" />
			<path d="M12 15.96v5.04" />
			<path d="M8.5 14l-4.5 2.5" />
			<path d="M8.5 10l-4.5 -2.505" />
		</svg>
	);
});

Walmart.displayName = "Walmart";
export default Walmart;

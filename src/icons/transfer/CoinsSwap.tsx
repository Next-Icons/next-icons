import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CoinsSwap = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9.01894 9C9.00639 8.83498 9 8.66824 9 8.5C9 4.91015 11.9101 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 12.0899 19.0899 15 15.5 15C15.3318 15 15.165 14.9936 15 14.9811" />
			<path d="M8.5 22C4.91015 22 2 19.0899 2 15.5C2 11.9101 4.91015 9 8.5 9C12.0899 9 15 11.9101 15 15.5C15 19.0899 12.0899 22 8.5 22Z" />
			<path d="M22 17C22 18.6569 20.6569 20 19 20H17M17 20L19 18M17 20L19 22" />
			<path d="M2 7C2 5.34315 3.34315 4 5 4H7M7 4L5 6M7 4L5 2" />
		</svg>
	);
});

CoinsSwap.displayName = "CoinsSwap";
export default CoinsSwap;

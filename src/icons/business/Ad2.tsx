import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Ad2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M11.933 5h-6.933v16h13v-8" />
			<path d="M14 17h-5" />
			<path d="M9 13h5v-4h-5v4" />
			<path d="M15 5v-2" />
			<path d="M18 6l2 -2" />
			<path d="M19 9h2" />
		</svg>
	);
});

Ad2.displayName = "Ad2";
export default Ad2;

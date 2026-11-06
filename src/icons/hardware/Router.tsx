import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Router = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="8" rx="2" width="20" x="2" y="14" />
			<path d="M6.01 18H6" />
			<path d="M10.01 18H10" />
			<path d="M15 10v4" />
			<path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
			<path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
		</svg>
	);
});

Router.displayName = "Router";
export default Router;

import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Pnpm = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 17h4v4h-4l0 -4" />
			<path d="M10 17h4v4h-4l0 -4" />
			<path d="M17 17h4v4h-4l0 -4" />
			<path d="M17 10h4v4h-4l0 -4" />
			<path d="M17 3h4v4h-4l0 -4" />
			<path d="M10 10h4v4h-4l0 -4" />
			<path d="M10 3h4v4h-4l0 -4" />
			<path d="M3 3h4v4h-4l0 -4" />
		</svg>
	);
});

Pnpm.displayName = "Pnpm";
export default Pnpm;

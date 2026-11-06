import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Npm = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M1 8h22v7h-12v2h-4v-2h-6l0 -7" />
			<path d="M7 8v7" />
			<path d="M14 8v7" />
			<path d="M17 11v4" />
			<path d="M4 11v4" />
			<path d="M11 11v1" />
			<path d="M20 11v4" />
		</svg>
	);
});

Npm.displayName = "Npm";
export default Npm;

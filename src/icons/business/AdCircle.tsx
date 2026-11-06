import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AdCircle = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
			<path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
			<path d="M7 13h3" />
			<path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" />
		</svg>
	);
});

AdCircle.displayName = "AdCircle";
export default AdCircle;

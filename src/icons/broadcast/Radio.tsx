import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Radio = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
			<path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
			<path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
			<path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	);
});

Radio.displayName = "Radio";
export default Radio;

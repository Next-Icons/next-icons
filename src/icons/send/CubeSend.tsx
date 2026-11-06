import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CubeSend = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
			<path d="M11 9.5v5.5l5 3" />
			<path d="M16 12.545l5 -3.03" />
			<path d="M7 9h-5" />
			<path d="M7 12h-3" />
			<path d="M7 15h-1" />
		</svg>
	);
});

CubeSend.displayName = "CubeSend";
export default CubeSend;

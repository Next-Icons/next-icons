import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MicSignal = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 17v4" />
			<path d="M18 11a6 6 0 00-3-5.197" />
			<path d="M2 11a10 10 0 015-8.662" />
			<path d="M22 11a10 10 0 00-5-8.662" />
			<path d="M6 11a6 6 0 013-5.197" />
			<path d="M9 21h6" />
			<rect height="8" rx="2" width="4" x="10" y="9" />
		</svg>
	);
});

MicSignal.displayName = "MicSignal";
export default MicSignal;

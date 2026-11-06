import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ScreenShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
			<path d="M8 21h8" />
			<path d="M12 17v4" />
			<path d="m17 8 5-5" />
			<path d="M17 3h5v5" />
		</svg>
	);
});

ScreenShare.displayName = "ScreenShare";
export default ScreenShare;

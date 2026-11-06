import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GoogleDrive = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 10l-6 10l-3 -5l6 -10l3 5" />
			<path d="M9 15h12l-3 5h-12" />
			<path d="M15 15l-6 -10h6l6 10l-6 0" />
		</svg>
	);
});

GoogleDrive.displayName = "GoogleDrive";
export default GoogleDrive;

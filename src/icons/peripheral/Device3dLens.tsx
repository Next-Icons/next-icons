import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Device3dLens = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18.005 14.64a3.98 3.98 0 0 0 .995 -2.64" />
			<path d="M12 4v16" />
			<path d="M15 5v14a7 7 0 0 0 0 -14" />
			<path d="M9 5v14a7 7 0 0 1 0 -14" />
		</svg>
	);
});

Device3dLens.displayName = "Device3dLens";
export default Device3dLens;

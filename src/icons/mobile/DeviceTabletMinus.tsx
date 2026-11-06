import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletMinus = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11" />
			<path d="M12.872 16.51a1 1 0 1 0 -.872 1.49" />
			<path d="M16 19h6" />
		</svg>
	);
});

DeviceTabletMinus.displayName = "DeviceTabletMinus";
export default DeviceTabletMinus;

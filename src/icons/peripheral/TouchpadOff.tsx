import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TouchpadOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 20v-6" />
			<path d="M19.656 14H22" />
			<path d="M2 14h12" />
			<path d="m2 2 20 20" />
			<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
			<path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
		</svg>
	);
});

TouchpadOff.displayName = "TouchpadOff";
export default TouchpadOff;

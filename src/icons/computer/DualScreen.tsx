import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DualScreen = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 4l8 3v15l-8 -3l0 -15" />
			<path d="M13 19h6v-15h-14" />
		</svg>
	);
});

DualScreen.displayName = "DualScreen";
export default DualScreen;

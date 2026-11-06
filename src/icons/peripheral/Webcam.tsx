import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Webcam = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="12" cy="10" r="8" />
			<circle cx="12" cy="10" r="3" />
			<path d="M7 22h10" />
			<path d="M12 22v-4" />
		</svg>
	);
});

Webcam.displayName = "Webcam";
export default Webcam;

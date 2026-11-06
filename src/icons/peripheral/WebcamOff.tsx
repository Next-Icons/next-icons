import { forwardRef } from "react";
import type { IconProps } from "../../types";
const WebcamOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 22v-4" />
			<path d="M12.754 7.096a3 3 0 0 1 2.15 2.15" />
			<path d="M12.863 12.873a3 3 0 0 1-3.736-3.735" />
			<path d="M16.566 16.57A8 8 0 0 1 5.43 5.433" />
			<path d="m2 2 20 20" />
			<path d="M7 22h10" />
			<path d="M8.478 2.817a8 8 0 0 1 10.705 10.705" />
		</svg>
	);
});

WebcamOff.displayName = "WebcamOff";
export default WebcamOff;

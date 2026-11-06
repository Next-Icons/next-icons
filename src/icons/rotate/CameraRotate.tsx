import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CameraRotate = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
			<path d="M11.245 15.904a3 3 0 0 0 3.755 -2.904m-2.25 -2.905a3 3 0 0 0 -3.75 2.905" />
			<path d="M14 13h2v2" />
			<path d="M10 13h-2v-2" />
		</svg>
	);
});

CameraRotate.displayName = "CameraRotate";
export default CameraRotate;
